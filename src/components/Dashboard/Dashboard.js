import React, { Component } from 'react';
import './Dashboard.css'
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: '',
      myPosts: true,
      posts:[]
    }
  }

  componentDidMount() {
    axios.get('/api/posts/')
    .then((response) => {
      this.setState({posts: response.data});
    })
  }

  resetPosts = () => {
    axios.get(`/api/posts?userposts=${this.state.myPosts}`)
    .then((response) => {
      this.setState({posts: response.data, searchInput: ''});
    })
  }

  performSearch = () => {
    axios.get(`/api/posts?userposts=${this.state.myPosts}&search=${this.state.searchInput}`)
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
        <div key={i} className="post" onClick={() => this.props.history.push(`/post/${post.postid}`)}>
          <h3>{post.title}</h3>
          <span>by {post.username}</span>
          <img src={post.profile_pic} alt="author's avatar" height="50px" width="50px"/>
        </div>
      )
    })
    return (
      <div className="dashboard-container">

      <div className="search-bar">
        <input onChange={(e) => this.updateSearchInput(e.target.value)} value={this.state.searchInput} placeholder='Search'></input>
        <button onClick={() => this.performSearch()}>Search</button>
        <button onClick={() => this.resetPosts()}>Reset</button>
        My Posts: <input type='checkbox' onClick={() => this.myPosts()} defaultChecked/>
      </div>

        <div className="posts-container">
          {posts}
        </div>
      </div>
    )
  }
}

export default Dashboard;