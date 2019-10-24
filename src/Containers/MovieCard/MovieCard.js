import React from 'react';
import { connect } from 'react-redux';
import './MovieCard.scss';
import { faveMovie } from '../../actions/index' 

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
  } = props;
  return (
    <article id={id} className="movie-card">
      <h1>{title}</h1>
      <p>{movieRating}</p>
      <p>{backgroundImage}</p>
      <p>{overview}</p>
      <p>{posterImage}</p>
      <p>{releaseDate}</p>
      <button onClick={(event) => props.faveMovie(parseInt(event.target.parentNode.id))}>Favorite</button>
      <p>{isFavorited}</p>
    </article>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  faveMovie: (id) => dispatch (faveMovie(id))
})

export default connect(null, mapDispatchToProps)(MovieCard);