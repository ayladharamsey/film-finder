export const getMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/550?api_key=0f1d43bea84ed1843958538d348af0d5'
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error getting your movies!!');
  }
  const movies = await response.json();
  return movies
}

export const createNewUser = () => {

}

export const getFavorites = () => {

}

export const setFavorites = () => {
    
}