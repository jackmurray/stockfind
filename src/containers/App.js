import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import HomePage from 'containers/HomePage'
import StockPage from 'containers/StockPage'
import NavbarPage from 'containers/NavbarPage'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <NavbarPage>
          <Route exact path='/stocks/:symbol' component={StockPage} />
        </NavbarPage>
      </Switch>
    )
  }
}

export default App
