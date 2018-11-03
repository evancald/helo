import React, { Component } from 'react';
import axios from 'axios';

class Auth extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  updateUsername = (value) => {
    this.setState({username: value});
  }

  updatePassword = (value) => {
    this.setState({password: value});
  }

  loginUser = () => {
    axios.post("http://localhost:8080/login", {
      username: this.state.username,
      password: this.state.password
    })
    .then((response) => {
      console.log(response);
      if (response.data) {
        this.props.history.push('/dashboard');
      } else {
        console.log('incorrect username or password');
      }
    })
  }

  registerUser = () => {
    axios.post("http://localhost:8080/register", {
      username: this.state.username,
      password: this.state.password
    })
    .then(() => {
      this.props.history.push('/dashboard');
    })
  }

  render() {
    return (
      <div>
        Username:
        <br />
        <input type='text' onChange={(e) => this.updateUsername(e.target.value)} placeholder='username' />
        <br />
        Password:
        <br />
        <input type='password' onChange={(e) => this.updatePassword(e.target.value)} placeholder='password' />
        <br />
        <button onClick={this.loginUser}>Login</button>
        <button onClick={this.registerUser}>Register</button>
      </div>
    )
  }
}

export default Auth;