import React from 'react';
import { connect } from 'react-redux';
import './MovieCard.scss';
import { faveMovie } from '../../actions/index'
import favorite from '../../images/favorite.svg'
import unfavorite from '../../images/unfavorite.svg' 

export const MovieCard = (props) => {

  const favoriteMovie = (event, id) => {
    props.faveMovie(parseInt(event.target.parentNode.id))
  }

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
      {isFavorited ? 
        <img src={favorite} alt="favorited" onClick={(event) => favoriteMovie(event, id)}/> : 
        <img src={unfavorite} alt="un favorited" onClick={(event) => favoriteMovie(event, id)}/>}
    </article>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  faveMovie: (id) => dispatch (faveMovie(id))
})

export default connect(null, mapDispatchToProps)(MovieCard);