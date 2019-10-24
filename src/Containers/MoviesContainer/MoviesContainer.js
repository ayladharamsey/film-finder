import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.scss';

const MoviesContainer = ({ movieData }) => {
  console.log(movieData.results);
  // if (movieData.results !== undefined){
  //   movieData.results.forEach(result => {
  //     console.log("result", result.original_title)
  //   })
  // }

  const movies = movieData.results.map(result => {
    return <MovieCard 
      key={result.id}
      title={result.original_title} />
  })
  

  return (
    <section className="movies-container">
      <h1>
        What is up?! This is Movies Container!!
        {movies}
      </h1>
    </section>
  )
}

export default MoviesContainer;