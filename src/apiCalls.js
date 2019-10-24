const apiKey = '0f1d43bea84ed1843958538d348af0d5';
const upcomingMovies = '/popular/';



export const getMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie${upcomingMovies}?api_key=${apiKey}`
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error getting your movies!!');
  }
  const movies = await response.json();
  console.log(movies)
  return movies
}

export const createNewUser = () => {

}

export const getFavorites = () => {

}

export const setFavorites = () => {
    
}