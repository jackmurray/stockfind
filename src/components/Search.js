import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'

import './Search.css'

class Search extends Component {
  state = {
    stock: ''
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onSearch(this.state.stock)
    }
  }

  render() {
    return (
      <div className={classNames('Search', this.props.className)}>
        <input
          name="search"
          onChange={(e) => this.setState({stock: e.target.value})}
          onKeyPress={this._handleKeyPress.bind(this)}
          placeholder="Search by ticker..."
          autoFocus
        />
        <button className="button"
                onClick={() => this.props.onSearch(this.state.stock)}>
          Search
        </button>
      </div>
    )
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default Search
