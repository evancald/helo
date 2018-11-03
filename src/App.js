import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import routes from './routes';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <Route component={Nav} />
        {routes}
      </div>
    );
  }
}

export default App;
