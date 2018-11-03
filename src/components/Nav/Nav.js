import React from 'react';
import { withRouter } from "react-router";

function Nav(props) {
  if (props.location.pathname !== '/') {
    return (
      <div>
        Nav
        <button onClick={() => props.history.push('/dashboard')}>Home</button>
        <button onClick={() => props.history.push('/new')}>New Post</button>
        <button onClick={() => props.history.push('/')}>Logout</button>
      </div>
    )
  } else {
    return null;
  }
}

export default withRouter(Nav);