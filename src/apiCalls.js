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

export const createNewUser = () => {

}

export const getFavorites = async (id) => {
    const response = await fetch('/api/v1/users/1/moviefavorites');
    if(!response.ok) {
        throw new Error('There was an error getting your favorites.')
    }
    const favorites = await response.json();
    console.log(favorites)
    return favorites;
}

export const setFavorites = () => {
    
}

export const loginUser = async userInfo => { 
  const options = {
    method: 'Post',
    body: JSON.stringify(userInfo), 
    headers: {
      'Content-Type' : 'appliction/json'
    }
  }
  const response = await fetch(`http://localhost:3001/api/v1/login`, options)
  if(!response.ok) {
    throw new Error('There was an error getting your information!')
  }

}