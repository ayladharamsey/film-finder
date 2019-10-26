import React, { Component } from 'react';
import './Create.scss';
import { setUser } from '../../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { devToolsEnhancer } from 'redux-devtools-extension';

class CreateUser extends Component { 
  constructor() { 
    super(); 
    this.state = {
      name: '',
      email: '', 
      password: '' 
    }
  }

  updateUser = e => { 
    this.setState({ [e.target.name]: e.target.value});
  }
  
    handleForm = e => { 
      e.preventDefault(); 
      this.props.addUser({
        name: this.state.name, 
        email: this.state.email, 
        password: this.state.password
      })
      this.clearInputs();
    }

    clearInputs = () => {
      this.setState({
        name: '', 
        email: '', 
        password: ''
      }); 
    }

    render() {
      const { name, email, password } = this.state; 
      return (
        <form className="form">
          <h1 className="title">FILMFINDER</h1>
          <section className="input_field">
            <button className="sign_in-btn">sign in</button>
            <h2 className="input_title" >Sign Up Now!</h2>
            <input 
            className="name"
            name="name"
            value={name}
            placeholder="type your name"
            onChange={this.updateUser}
            />
            <input 
            className="email"
            name="email"
            value={email}
            placeholder="type your email"
            onChange={this.updateUser}
            />
            <input 
            className="password"
            name="password"
            value={password}
            placeholder="type your password"
            onChange={this.updateUser}
            />
            <button className="button" onClick={this.handleForm}>sign up</button>
          </section>
        </form>
      )
    }

}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(CreateUser);
