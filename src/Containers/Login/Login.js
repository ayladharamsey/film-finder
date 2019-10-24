import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    }
  }

  updateUser = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  loginUser = e => {
    e.preventDefault();
    this.props.setUser({ ...this.state, id: Date.now() });
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
        <form class="login_form">
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
          <button onClick={this.loginUser}>
            Sign In
          </button>
        </form>
    )
  }
}

export default Login;
