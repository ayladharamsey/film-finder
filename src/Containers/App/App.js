import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { getMovies, createNewUser, getFavorites, setFavorites } from '../../apiCalls';
import { setMovies, faveMovie, setUser, isLoading, hasErrored, setFaves } from '../../actions';

class App extends Component {
  
  async componentDidMount() {
    try {
      this.props.isLoading(true);
      const films = await getMovies();
      this.props.isLoading(false); 
      this.props.setMovies(films);
    } catch({ message }) {
      this.props.isLoading(false);
      this.props.hasErrored(message);
    }
  
    const addUser = async newUser => {
      try {
        await createNewUser(newUser);
        const users = await getFavorites(); 
        this.props.setUser(users);
      } catch(error) {
        this.props.isLoading(false);
        this.props.hasErrored(error.message);
      }
    }
    
    const retrieveFavorites = async id => {
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
}
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieData: state.movieData,
  favoritedMovie: state.favoritedMovie,
  user: state.user,
  loading: state.loading,
  hasErrored: state.hasErrored  
})

const mapDispatchToProps = dispatch => (
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
