import React, { Component } from 'react';
import './Login.scss';
import { setUser } from '../../actions'
import { connect } from 'react-redux'
import { user } from '../../reducers/user';
import { Link, Redirect, NavLink } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '', 
    }
  }

  updateUser = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick = e => {
    // e.preventDefault();
    this.props.loginUser({
      email: this.state.email,
      password: this.state.password
    })
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    const { email, password } = this.state;
    return (
        <form className="login_form">
          <input
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.updateUser}
          />
          <input
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.updateUser}
          />
          <Link to='/movies'>
            <button onClick={this.handleClick}>Sign in</button>
          </Link>
          <Link to='/create-user'><h5>Not a user? Create a new user account!</h5></Link>
        </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(Login);
