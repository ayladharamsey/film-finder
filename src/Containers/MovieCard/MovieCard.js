import React from 'react';
import { connect } from 'react-redux';
import './MovieCard.scss';
import { faveMovie } from '../../actions/index'
import favorite from '../../images/favorite.svg'
import unfavorite from '../../images/unfavorite.svg' 

export const MovieCard = (props) => {
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
        <button className="fave_button" onClick={(event) => props.faveMovie(parseInt(event.target.parentNode.id))}>Favorite</button>
        {isFavorited ? 
          <img className="fave_btn-img" src={favorite} alt="favorited" onClick={(event) => props.faveMovie(parseInt(event.target.parentNode.id))}/> : 
          <img className="fave_btn-img"
          src={unfavorite} alt="un favorited" onClick={(event) => props.faveMovie(parseInt(event.target.parentNode.id))}/>}
      </div>
    </article>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  faveMovie: (id) => dispatch (faveMovie(id))
})

export default connect(null, mapDispatchToProps)(MovieCard);