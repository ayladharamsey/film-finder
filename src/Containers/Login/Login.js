import React, { Component } from 'react';
import './Login.scss';
import { setUser } from '../../actions'
import { connect } from 'react-redux'
import { user } from '../../reducers/user';
import { Link, Redirect, NavLink } from 'react-router-dom';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonClick: false,
      error: 'error', 
    }
  }

  updateUser = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick = e => {
    e.preventDefault()
    this.setState({buttonClick: true})
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

  handleError = () => {
    return (
      <h3>{this.props.hasErrored}</h3>
    )
  }

  linkToMovies = () => {
    if (this.props.user.email !== ""){
      return (
        <Redirect to='/movies'>Movies Link</Redirect>
      )
    }
  }

  render() {
    const { email, password, buttonClick } = this.state;
    const { hasErrored, user } = this.props;
    let error;

    if ((buttonClick === true) && (hasErrored !== "")) {
      error = this.handleError()
    }

    if ((buttonClick === true) && (user.id !== undefined)) {
      error = this.linkToMovies()
    }



    // const something = hasErrored !== "" ? this.handleError() : null

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
          <button onClick={(e) => this.handleClick(e)}>Sign in</button>
          <Link to='/create-user'><h5>Not a user? Create a new user account!</h5></Link>
          {error}
        </form>
    )
  }
}

export const mapStateToProps = state => ({
  hasErrored: state.hasErrored,
  user: state.user,
})

export const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
