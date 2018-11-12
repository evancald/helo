import React, { Component } from 'react';
import './Nav.css';
import { connect } from 'react-redux';
import { updateUsername, updateProfilePicture, resetState } from '../../ducks/reducer';
import axios from 'axios';

class Nav extends Component {

    componentDidMount() {
      axios.get('/api/auth/me')
      .then((response) => {
        const { updateUsername, updateProfilePicture } = this.props;
        if (response.data[0].username) {
          updateUsername(response.data[0].username);
          updateProfilePicture(response.data[0].profile_pic);
        }
      })
      .catch(err => {
        console.log('error:', err);
      })
    }

    logout = () => {
      axios.post('/api/auth/logout')
      .then(() => {
        this.props.resetState();
        this.props.history.push('/');
      });
    }

  render() {
      if (this.props.location.pathname !== '/') {
        return (
          <div className="nav-container">
          <div className="nav-items">
            <img className="prof-pic" src={this.props.profilePicture} alt="user default" height="90px" width="90px" />
            <div className="username">
              {this.props.username}
            </div>
            <button onClick={() => this.props.history.push('/dashboard')}>Home</button>
            <button onClick={() => this.props.history.push('/new')}>New Post</button>
          </div>
          <div className="logout">
            <button onClick={this.logout}>Logout</button>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  const {username, profilePicture} = state;
  return {
    username,
    profilePicture
  }
}

export default connect(mapStateToProps, { updateUsername, updateProfilePicture, resetState })(Nav);