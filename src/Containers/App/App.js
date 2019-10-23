import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { getMovies, createNewUser, getFavorites, setFavorites } from '../../apiCalls';
import { setMovies, faveMovie, setUser, isLoading, hasErrored } from '../actions/index'

class App extends component {
  
  componentDidMount(){
    const { setMovies, faveMovie, setUser, isLoading, hasErrored } = this.props;
    try {
      this.props.isLoading(true);
      const films = await getMovies();
      this.props.isLoading(false); 
    } catch(error) {
      this.props.isLoading(false);
      this.props.hasErrored(error.message)
    }
  
    const addUser = async newUser => {
      try {
        await createNewUser(newUser);
        const users = await getFavorites(); 
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
