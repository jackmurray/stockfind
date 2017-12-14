import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Search from 'components/Search'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1 className="title">StockFind</h1>
        <Search className="search" onSearch={this.props.onSearch} />
      </div>
    )
  }
}

Home.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default Home
