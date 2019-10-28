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
      console.log(event)
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
      <img
        className='movieCard__img'
        src={posterImage}
        alt='Official movie poster'
      />
      {/* <p className="rating" >{movieRating}</p> */}
      {/* <p className="image" >{backgroundImage}</p> */}
      {/* <p className="overview">{overview}</p> */}
      {/* <p className="releaseDate">{releaseDate}</p> */}
      <div className="footer">
        <p className="movie_title">{title}</p>
        {isFavorited ?
          <img className="fave_btn-img" src={favorite} alt="favorited" onClick={(event) => favoriteMovie(event, id)} /> :
          <img className="fave_btn-img" src={unfavorite} alt="un favorited" onClick={(event) => favoriteMovie(event, id)} />}
        {error}
      </div>
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

