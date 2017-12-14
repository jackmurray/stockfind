import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Search from 'components/Search'

import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <h1 className="title">
          <b>StockFind</b>
          <span className="breadcrumb"> &gt; {this.props.searchTerm}</span>
        </h1>
        <Search className='search' onSearch={this.props.onSearch} />
      </div>
    );
  }
}

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
}

export default Navbar
