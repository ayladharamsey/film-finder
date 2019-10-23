import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { getMovies, createNewUser, getFavorites, setFavorites } from '../../apiCalls';
import { setMovies, faveMovie, setUser, isLoading, hasErrored, setFaves } from '../../actions';

class App extends Component {
  
  async componentDidMount() {
    const { setMovies, faveMovie, setUser, isLoading, hasErrored, setFaves } = this.props;
    try {
      this.props.isLoading(true);
      const films = await getMovies();
      this.props.isLoading(false); 
      this.props.setMovies(films);
    } catch(error) {
      this.props.isLoading(false);
      this.props.hasErrored(error.message);
    }
  
    const addUser = async newUser => {
      try {
        await createNewUser(newUser);
        const users = await getFavorites(); 
        this.props.setUser(users);
      } catch(error) {
        this.props.isLoading(false);
        this.props.hasErrored(error.message)
      }
    }
    
    const retrieveFavorites = async faveMovie => {
      try {
        this.props.isLoading(true);
        const faves = await faveMovie();
        this.props.isLoading(false);
        this.props.setFaves(faves)
      } catch(error) {
        this.props.isLoading(false);
        this.props.hasErrored(error.message)
    }
  }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default App;
