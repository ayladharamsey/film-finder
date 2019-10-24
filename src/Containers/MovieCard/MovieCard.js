import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ title }) => {
  return (
    <section className="movie-card">
      <h4>
        {title}
      </h4>
    </section>
  )
}

export default MovieCard;