import React from 'react';
import { connect } from 'react-redux';
import './MovieCard.scss';
import { faveMovie } from '../../actions/index'
import favorite from '../../images/favorite.svg'
import unfavorite from '../../images/unfavorite.svg' 

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
      {/* <button onClick={(event) => props.faveMovie(parseInt(event.target.parentNode.id))}>Favorite</button> */}
      {isFavorited ? 
        <img src={favorite} alt="favorited" onClick={(event) => props.faveMovie(parseInt(event.target.parentNode.id))}/> : 
        <img src={unfavorite} alt="un favorited" onClick={(event) => props.faveMovie(parseInt(event.target.parentNode.id))}/>}
    </article>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  faveMovie: (id) => dispatch (faveMovie(id))
})

export default connect(null, mapDispatchToProps)(MovieCard);