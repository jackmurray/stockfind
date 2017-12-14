import React, { Component } from 'react'

import Home from 'components/Home'

class HomePage extends Component {
  handleSearch(symbol) {
    this.props.history.push(`/stocks/${symbol}`) // voila!
  }
  render() {
    return <Home onSearch={this.handleSearch.bind(this)} />
  }
}

export default HomePage
