
const apiKey = '0f1d43bea84ed1843958538d348af0d5';
const upcomingMovies = '/popular/';
const imageUrl = 'https://image.tmdb.org/t/p/original';

export const getMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie${upcomingMovies}?api_key=${apiKey}`
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error getting your movies.');
  }
  const movies = await response.json();
  const cleanedMovieData = await movies.results.map(async (result) => {
    const { id, adult, backdrop_path, overview, poster_path, title, release_date, vote_average } = result;
    return {
        id: id,
        movieRating: adult,
        backgroundImage: `${imageUrl}${backdrop_path}`,
        overview: overview,
        posterImage: `${imageUrl}${poster_path}`,
        title: title,
        releaseDate: release_date,
        isFavorited: false,
        voteAverage: vote_average
    }
  })
  return await Promise.all(cleanedMovieData);
}

export const getFavorites = async (id) => {
    const response = await fetch(`http://localhost:3001/api/v1/users/${id}/moviefavorites`);
    if(!response.ok) {
        throw new Error('There was an error getting your favorites.')
    }
    const favorites = await response.json();
    return favorites.favorites
}

export const setFavorites = async (id, faveObj) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(faveObj),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response =  await fetch(`http://localhost:3001/api/v1/users/${id}/moviefavorites`, options)
  
}



export const deleteFavorites = () => {
    
}

export const loginUserCheck = async userInfo => { 
  const options = {
    method: 'POST',
    body: JSON.stringify(userInfo), 
    headers: {
      'Content-Type' : 'application/json'
    }
  }
  const response = await fetch(`http://localhost:3001/api/v1/login`, options)
  if (response.status === 401) {
    throw Error('email or password is incorrect')
  }
  if(!response.ok) {
    throw new Error('There was an error getting your information!')
  }
  const data = await response.json();
  return data 
}

export const createNewUser = async userInfo => {
  const options = {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(`http://localhost:3001/api/v1/users`, options)
  if (response.status === 500) {
    throw Error('This email has already been used')
  } 
  if (!response.ok) {
    throw new Error('There was an error getting your information!')
  }
  const data = await response.json();
  return data
}