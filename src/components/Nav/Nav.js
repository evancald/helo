import React from 'react';
import { connect } from 'react-redux';

function Nav(props) {
  if (props.location.pathname !== '/') {
    return (
      <div>
        Nav
        <br/>
        Username: {props.username}
        <br />
        Profile Picture: {props.profilePicture}
        <br />
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