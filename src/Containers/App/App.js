import './App.scss';
import Login from '../Login/Login';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import CreateUser from '../CreateUser/CreateUser';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getMovies, createNewUser, getFavorites } from '../../apiCalls';
import { setMovies, faveMovie, setUser, isLoading, hasErrored } from '../../actions';

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
      await createNewUser(newUser);
      const users = await getFavorites(); 
      this.props.setUser(users);
    } catch(error) {
      this.props.isLoading(false);
      this.props.hasErrored(error.message);
    }
  }
    
  retrieveFavorites = async id => {
    try {
      this.props.isLoading(true);
      const faves = await getFavorites(id);
      this.props.isLoading(false);
      this.props.setFaves(faves);
    } catch(error) {
      this.props.isLoading(false);
      this.props.hasErrored(error.message);
    }
  }
   
  render() {
    const { movieData, setUser } = this.props;
    return (
      <Router>
        <Switch>
          <main>
            <Route 
            exact 
            path="/"
            render = {() => <MoviesContainer movieData={movieData}/>}
            />
            <Route 
            exact 
            path="/login"
            render = {() => <Login setUser={setUser} />}
            />
            <Route 
            exact 
            path="/favorites"
            render = {() => <MoviesContainer movieData={movieData.filter(movie => movie.isFavorited)}/>} // we are going to delete movieData our, and we just going to pass the favorites Data. Right now, we have our movieContainer only based off of movieData, but we should conditionally render the favorites

            // MS - movieData also contains the favorited movies, can we just filter for the favorites?  have written example above
            />
            <Route 
            exact 
            path="/create-user"
            render = {() => <CreateUser />} // we will need to pass some props here 
            />
            <Route 
            exact 
            path="/movies"
            render = {() => <MoviesContainer movieData={movieData}/>} //refactor this to access from store
            />
            <Route 
            exact 
            path="/movies/:id"
            render = {({ match }) => {
              const { id } = match.params;
              const numberId = parseInt(id); 
              // return (
              //   //add the movieInfo component here 
              // )
            }}
            />
          </main>
        </Switch>
      </Router>
    );
  }
}

export const mapStateToProps = state => ({
  movieData: state.movieData,
  user: state.user,
  loading: state.loading,
  hasErrored: state.hasErrored  
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setMovies,
    faveMovie,
    setUser,
    isLoading,
    hasErrored
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
