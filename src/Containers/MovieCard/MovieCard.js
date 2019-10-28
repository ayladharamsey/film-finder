import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieCard.scss';
import { faveMovie } from '../../actions/index'
import favorite from '../../images/favorite.svg'
import unfavorite from '../../images/unfavorite.svg'
import { Redirect } from 'react-router-dom'; 

export class MovieCard extends Component {
  constructor(){
    super()
    this.state = {
      btnClick: false,
    }
  }

  favoriteMovie = (event, id) => {
    this.props.faveMovie(parseInt(event.target.parentNode.id))
  }

  checkLogginStatus = (event, id) => {
    if (this.props.user.id === undefined) {
      return (
        <Redirect to='/login'>Not Logged In</Redirect>
      )
    }
    this.favoriteMovie(event, id)
    return
  }

  
  
  render() {
    const { id, 
    movieRating, 
    backgroundImage, 
    overview, 
    posterImage, 
    title, 
    releaseDate, 
    isFavorited 
    } = this.props;
    
    return (
    <article id={id} className="movie-card">
      <h1>{title}</h1>
      <p>{movieRating}</p>
      <p>{backgroundImage}</p>
      <p>{overview}</p>
      <p>{posterImage}</p>
      <p>{releaseDate}</p>
      {isFavorited ? 
        <img src={favorite} alt="favorited" onClick={(event) => this.checkLogginStatus(event, id)}/> : 
        <img src={unfavorite} alt="un favorited" onClick={(event) => this.checkLogginStatus(event, id)}/>}
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