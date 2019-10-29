/* eslint-disable import/first */

import './App.scss';
import Login from '../Login/Login';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import CreateUser from '../CreateUser/CreateUser';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Nav from '../Nav/Nav'
import { Switch, Route} from 'react-router-dom';
import { getMovies, createNewUser, getFavorites, loginUserCheck } from '../../apiCalls';
import { setMovies, faveMovie, setUser, isLoading, hasErrored, setFaves } from '../../actions';

export class App extends Component {
  
  async componentDidMount() {
    try {
      this.props.isLoading(true);
      const films = await getMovies();
      this.props.setMovies(films);
      this.props.isLoading(false);
    } catch({ message }) {
      this.props.hasErrored(message);
      this.props.isLoading(false);
    }
  }
  
   addUser = async newUser => {
      try {
        const response = await createNewUser(newUser); 
        this.props.setUser({
          id: response.id,
          name: response.name,
          email: response.email, 
          password: response.passoword
        });
      } catch(error) {
        this.props.isLoading(false);
        this.props.hasErrored(error.message);
      }
    }

    loginUser = async user => {
      try {
       const response = await loginUserCheck(user);
       if(response.id) {
         this.props.setUser({
           name: response.name,
           id: response.id
         })
       }
       this.retrieveFavorites(response.id)
      }
      catch({message}){
      this.props.hasErrored(message);
      }
    }
    
  retrieveFavorites = async id => {
    if (id) {
      try {
        const faves = await getFavorites(id);
        faves = faves.forEach(fave => {
          this.props.faveMovie(fave.movie_id)
        })
        this.props.setFaves(faves)
      } catch({ message })  {
        this.props.hasErrored(message);
        this.props.isLoading(false);
      }
    }
  }
   
  render() {
    const { movieData } = this.props;
    return (
        <Switch>
          <main>
            <Route 
            exact 
            path="/create-user"
            render = {() => <CreateUser addUser={this.addUser} />}  
            />
            <Route 
            exact 
            path="/login"
            render = {() => <Login loginUser={this.loginUser} />}
            />
            <Route 
            exact 
            path="/"
            render = {() => {
              return (
                <>
                <Nav></Nav>
                <MoviesContainer movieData={movieData}/>
                </>
                )
            }}/>
            <Route 
            exact 
            path="/movies"
            render = {() => {
              return (
                <>
                  <Nav></Nav>
                  <MoviesContainer movieData={movieData}/>
                </>
                )
            }} 
            />
          </main>
        </Switch>
    );
  }
}

export const mapStateToProps = state => ({
  movieData: state.movieData,
  user: state.user,
  loading: state.loading,
  hasErrored: state.hasErrored,
  favorites: state.favorites  
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setMovies,
    faveMovie,
    setUser,
    isLoading,
    hasErrored,
    setFaves
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
// 