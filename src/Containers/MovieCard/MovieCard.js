import React from 'react';
import './MovieCard.scss';

const MovieCard = (props) => {
  const { 
    id, 
    movieRating, 
    backgroundImage, 
    overview, 
    posterImage, 
    title, 
    releaseDate, 
    isFavorited 
  } = this.props;
  return (
    <article className="movie-card">
      <h1>{title}</h1>
      <p>{movieRating}</p>
      <p>{backgroundImage}</p>
      <p>{overview}</p>
      <p>{posterImage}</p>
      <p>{releaseDate}</p>
      <p>{isFavorited}</p>
    </article>
  )
}

export default MovieCard;