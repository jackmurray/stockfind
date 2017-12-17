import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import Home from 'containers/Home'
import Layout from 'containers/Layout'
import StockPage from 'containers/StockPage'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Layout>
          <Route exact path='/stocks/:symbol' component={StockPage} />
        </Layout>
      </Switch>
    )
  }
}

export default App
