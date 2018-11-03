import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
