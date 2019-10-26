import React from 'react';
import './Nav.scss';
import { Route, Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav>
      <h1>Movie Tracker</h1>
      <Link to='/login'><button>Login</button></Link>
    </nav>
  )
}

export default Nav;