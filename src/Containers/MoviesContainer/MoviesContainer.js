import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.scss';

const MoviesContainer = ({ movieData }) => {
  console.log(movieData);

  return (
    <section className="movies-container">
      <h1>
        What is up?! This is Movies Container!!
        {movieData.original_title}
      </h1>
    </section>
  )
}

export default MoviesContainer;