import React, { Component } from 'react';
import './Login.scss';
import { setUser } from '../../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { user } from '../../reducers/user';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '' 
    }
  }

  updateUser = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick = e => {
    e.preventDefault();
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
            <button className="button" onClick={this.handleClick}>
              login
            </button>
          </section>
        </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(Login);
