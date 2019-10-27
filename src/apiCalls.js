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
    const { id, adult, backdrop_path, overview, poster_path, title, release_date } = result;
    return {
        id: id,
        movieRating: adult,
        backgroundImage: `${imageUrl}${backdrop_path}`,
        overview: overview,
        posterImage: `${imageUrl}${poster_path}`,
        title: title,
        releaseDate: release_date,
        isFavorited: false
    }
  })
  return await Promise.all(cleanedMovieData);
}

export const getFavorites = async (id) => {
    const response = await fetch('/api/v1/users/1/moviefavorites');
    if(!response.ok) {
        throw new Error('There was an error getting your favorites.')
    }
    const favorites = await response.json();
    return favorites;
}

export const setFavorites = () => {
    
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
  if(!response.ok) {
    throw new Error('There was an error getting your information!')
  }
  const data = await response.json();
  return data 
}

export const createNewUser = async userInfo => {
  console.log("userInfo", userInfo)
  const options = {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(`http://localhost:3001/api/v1/users`, options)
  console.log("response", response)
  if (!response.ok) {
    throw new Error('There was an error getting your information!')
  }
  const data = await response.json();
  return data
}


