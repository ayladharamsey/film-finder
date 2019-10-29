import React, { Component } from 'react';
import './Login.scss';
import { setUser} from '../../actions';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonClick: false,
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
        <Redirect to='/movies'></Redirect>
      )
    }
  }

  render() {
    const { email, password, buttonClick } = this.state;
    const { hasErrored, user } = this.props;
    let error;

    if ((buttonClick === true)) {
      error = this.handleError()
    }

    if ((buttonClick === true) && (user.id !== undefined)) {
      error = this.linkToMovies()
    }

    return (
      <form className="form">
        <h1 className="title">FILMFINDER</h1>
          <section className="input_field">
            <Link to='/create-user'>
              <button className="sign_in-btn">create login</button>
            </Link>
            <h2 className="input_title" >User Login</h2>
            <input
              className="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.updateUser}
            />
            <input
              className="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.updateUser}
            />
            <button className="button" onClick={(e) => this.handleClick(e)}>
              login
            </button>
            {error}
          </section>
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
