import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.scss';

const MoviesContainer = ({ movieData }) => {
  console.log(movieData.results);

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