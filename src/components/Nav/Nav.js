import React from 'react';
import './Nav.css';
import { connect } from 'react-redux';

function Nav(props) {
  if (props.location.pathname !== '/') {
    return (
      <div className="nav-container">
        <img src={props.profilePicture} alt="user default" height="90px" width="90px" />
        <div className="username">
          {props.username}
        </div>
        <button onClick={() => props.history.push('/dashboard')}>Home</button>
        <button onClick={() => props.history.push('/new')}>New Post</button>
        <button onClick={() => props.history.push('/')}>Logout</button>
      </div>
    )
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  const {username, profilePicture} = state;
  return {
    username,
    profilePicture
  }
}

export default connect(mapStateToProps)(Nav);