import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Search from 'components/Search'
import { fetchStock } from 'actions/stock'
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

const mapStateToProps = () => ({})
const mapDispatchToProps = { onSearch: fetchStock }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
