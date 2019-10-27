import React from 'react';
import { connect } from 'react-redux';
import './MovieCard.scss';
import { faveMovie } from '../../actions/index'
import favorite from '../../images/favorite.svg'
import unfavorite from '../../images/unfavorite.svg'
import { Redirect } from 'react-router-dom'; 

export const MovieCard = (props) => {

  const favoriteMovie = (event, id) => {
    // needs to also update the api here...
    // I feel like in normal React this would live in app
    // so how do I structure it for Redux?
    // it becomes an action that goes through the reducer??
    // that is where I'm getting confused
    // but I want this function to be available anywhere the movies are
    //  so here...   and eventually in MoviesInfo
    // not sure how MoviesInfo will be structured yet....  so lets just do it here?
    // make an api call
    // check that they are logged in first
    if (props.user.id === undefined) {
      return (
        <Redirect to='/login'>Not Logged In</Redirect>
      )}
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
  let error;
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
      {error}
    </article>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  faveMovie: (id) => dispatch (faveMovie(id))
})

export const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);