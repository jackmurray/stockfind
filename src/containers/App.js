import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage'
import SearchPage from 'containers/SearchPage'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/stocks/:symbol' component={SearchPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
