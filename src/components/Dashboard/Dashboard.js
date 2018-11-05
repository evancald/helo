import React, { Component } from 'react';
import './Dashboard.css'
import Post from '../Post/Post';
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
        <div key={i}>
          <Post content={post.content} img={post.img} profilePic={post.profile_pic} title={post.title} author={post.username} />
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
        {posts}
      </div>
    )
  }
}

export default Dashboard;