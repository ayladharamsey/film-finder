import React, { Component } from 'react';
import './Create.scss';
import { connect } from 'react-redux';
import { setUser } from '../../actions'
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
        <form>
          <input 
          name="name"
          value={name}
          placeholder="Name"
          onChange={this.updateUser}
          />
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
          <button onClick={this.handleForm}>Submit</button>
        </form>
      )
    }

}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(CreateUser);
