import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Search from 'components/Search'

import './Navbar.css'

class Navbar extends Component {
  render() {
    let breadcrumb = this.props.breadcrumb &&
      <span className="breadcrumb"> &gt; {this.props.breadcrumb}</span>

    return (
      <div className="Navbar">
        <h1 className="title">
          <Link to="/">StockFind</Link>
          {breadcrumb}
        </h1>
        <Search className='search' onSearch={this.props.onSearch} />
      </div>
    );
  }
}

Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  breadcrumb: PropTypes.string
}

export default Navbar
