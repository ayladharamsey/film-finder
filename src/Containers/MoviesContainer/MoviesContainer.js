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
    <div className="scroll-wrapper">
      <section className="movies-container">
          {movies}
      </section>
    </div>
  )
}

export default MoviesContainer;