import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div>
        {this.props.content}
        <img src={this.props.img} alt="test" height="100px" width="100px" />
      </div>
    )
  }
}

export default Post;