import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieCard.scss';
import { faveMovie } from '../../actions/index'
import favorite from '../../images/favorite.svg'
import unfavorite from '../../images/unfavorite.svg'
import { Redirect } from 'react-router-dom'; 
import { setFavorites, getFavorites } from '../../apiCalls'


export class MovieCard extends Component {
  constructor(){
    super()
    this.state = {
      btnClick: false,
    }
  }

  render() {
    const favoriteMovie = (event) => {
      this.props.faveMovie(parseInt(event.target.parentNode.parentNode.id));
      getFavorites(this.props.user.id)
      setFavorites(this.props.user.id, {
        "movie_id": `${event.target.parentNode.parentNode.id}`,
        "title": "sample",
        "poster_path": "example",
        "release_date": "2019-10-18",
        "vote_average": 5.8,
        "overview": "once upon a time"
      } );
    }
  
    const checkLogginStatus = () => {
      if (user.id === undefined) {
        return (
          <Redirect to='/login'>Not Logged In</Redirect>
        )
      }
      return
    }

    const handleClick = (event, id) => {
      this.setState({btnClick: true})
      favoriteMovie(event, id) 
    }

    const { 
    user,
    id, 
    movieRating, 
    backgroundImage, 
    overview, 
    posterImage, 
    title, 
    releaseDate, 
    isFavorited 
    } = this.props;

    const cutOverview = overview.split('').splice(0, 140)

    const { btnClick } = this.state

    let error;

    if ((btnClick === true)) {
      error = checkLogginStatus()
    }
    
    return (
    <article id={id} className="movie-card">
      <img
        className='movieCard__img'
        src={posterImage}
        alt='Official movie poster'
      />
      <div className="footer">
        <p className="over-view">Overview: {cutOverview}</p>
        <p>Release Date: {releaseDate}</p>
        <p className="movie_title">{title}</p>
        {isFavorited ? 
          <img className="fave_btn-img" src={favorite} alt="favorited" onClick={(event) => handleClick(event)}/> : 
          <img className="fave_btn-img" src={unfavorite} alt="un favorited" onClick={(event) => handleClick(event, id)}/>}
        {error}
      </div>
    </article>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  faveMovie: (id) => dispatch (faveMovie(id))
})

export const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

