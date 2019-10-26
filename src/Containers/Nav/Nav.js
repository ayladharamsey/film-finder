import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


export const Nav = (props) => {
  const { user } = props;
  const loginLink = <Link to='/login'><button>Login</button></Link>;
  const logoutLink = <Link to='/'><button>Logout</button></Link>

  return (
    <nav>
      <h1>Movie Tracker</h1>
      {user.name ? logoutLink : loginLink}
    </nav>
  )
}

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(Nav);