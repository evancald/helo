import React, { Component } from 'react';
import axios from 'axios';
import './Post.css';

class Post extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    const postid = this.props.match.params.postid;
    axios.get(`/api/post/${postid}`)
    .then((response) => {
      this.setState({
        title: response.data[0].title,
        img: response.data[0].img,
        content: response.data[0].content,
        profPic: response.data[0].profile_pic,
        username: response.data[0].username
      })
    })
  }

  render() {
    return (
      <div className="post-container">
        <h3>{this.state.title}</h3>
        <img src={this.state.img} alt="post" width="300px" height="150px" />
        <span>{this.state.content}</span>
        <div className="byline">
          <img src={this.state.profPic} alt="author" width="50px" height="50px" />
          <span>by {this.state.username}</span>
        </div>
      </div>
    )
  }
}

export default Post;