import React, { Component } from 'react';
import './Auth.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUsername, updatePassword, updateProfilePicture } from '../../ducks/reducer';
import logo from '../../assets/logo.png';

class Auth extends Component {

  loginUser = () => {
    axios.post("/api/auth/login", {
      username: this.props.username,
      password: this.props.password
    })
    .then((response) => {
      if (response.data) {
        this.props.updateProfilePicture(response.data[0].profile_pic);
        this.props.history.push('/dashboard');
      } else {
        window.alert('Incorrect username or password');
      }
    })
  }

  registerUser = () => {
    axios.post("/api/auth/register", {
      username: this.props.username,
      password: this.props.password,
      profile_pic: `https://robohash.org/${this.props.username}`
    })
    .then(() => {
      this.loginUser();
    })
  }

  render() {
    const { updateUsername, updatePassword } = this.props;
    return (
      <div className="auth-background">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
        <div className="auth-container">
          <img src={logo} alt="logo" height="100px" width="100px" />
          <div className="title">Helo</div>
          <div className="auth-input">
           Username: <input type='text' onChange={(e) => updateUsername(e.target.value)} value={this.props.username} placeholder='username' />
          </div>
          <div className="auth-input">
            Password: <input type='password' onChange={(e) => updatePassword(e.target.value)} value={this.props.password} placeholder='password' />
          </div>
          <div className="buttons">
              
              <button onClick={this.loginUser}>Login</button>

              <button onClick={this.registerUser}>Register</button>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { username, password, profilePicture } = state;
  return {
    username,
    password,
    profilePicture
  }
}

export default connect(mapStateToProps, { updateUsername, updatePassword, updateProfilePicture })(Auth);