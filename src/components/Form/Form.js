import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';
import placeholderImg from '../../assets/placeholder.png';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      img: '',
      content: ''
    }
  }

  handleInput = (toUpdate, value) => {
    this.setState({[toUpdate]: value});
  }

  createPost = () => {
    axios.post(`/api/post`, {
      title : this.state.title,
      img: this.state.img,
      content: this.state.content
    })
    .then(() => {
      this.props.history.push('/dashboard');
    })
  }

  render() {
    return (
      <div className="form-container">
        <h2>Create Post</h2>
        <div>
          Title:
          <input onChange={(e) => this.handleInput('title', e.target.value)} value={this.state.title} placeholder="title" />
        </div>
        <div>
          Image URL:
          <input onChange={(e) => this.handleInput('img', e.target.value)} value={this.state.img} placeholder="img" />
        </div>
        <div>
          Content:
          <input onChange={(e) => this.handleInput('content', e.target.value)} value={this.state.content} placeholder="Write your post here!" />
        </div>
        <div>
          {this.state.img ? <img src={this.state.img} alt="user submitted" height="200px" width="300px" /> : <img src={placeholderImg} alt="placeholder" height="200px" width="300px" /> }
        </div>
        <div>
          <button onClick={() => this.createPost()}>Post</button>
        </div>
      </div>
    )
  }
}

export default Form;