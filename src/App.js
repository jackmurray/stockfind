import React, { Component } from 'react';
import Home from './Home';
import Stock from './Stock';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class NotFound extends Component {
  render() {
    return <div><h1>404 - Not Found</h1></div>;
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/stocks/:stock" component={Stock}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
