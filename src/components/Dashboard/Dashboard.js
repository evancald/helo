import React, { Component } from 'react';
import './Dashboard.css'
//import Post from '../Post/Post';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: '',
      myPosts: false,
      posts:[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/posts')
    .then((response) => {
      this.setState({posts: response.data});
    })
  }

  updateSearchInput = (value) => {
    this.setState({searchInput: value});
  }

  myPosts = () => {
    this.state.myPosts ? this.setState({myPosts: false}) : this.setState({myPosts: true});
  }

  render() {
    const posts = this.state.posts.map((post, i) => {
      return (
        <div key={i} className="post">
          <h3>{post.title}</h3>
          <span>by {post.username}</span>
          <img src={post.profile_pic} alt="author's avatar" height="50px" width="50px"/>
        </div>
      )
    })
    return (
      <div className="dashboard-container">
        <input onChange={(e) => this.updateSearchInput(e.target.value)} value={this.state.searchInput} placeholder='Search'></input>
        <button>Search</button>
        <button>Reset</button>
        <input type='checkbox' onClick={() => this.myPosts()} />My Posts <br /> 
        <br />
        <div className="post-container">
          {posts}
        </div>
      </div>
    )
  }
}

export default Dashboard;