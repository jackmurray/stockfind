import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Stock from 'components/Stock'
import { fetchStock } from 'actions/stock'
import './StockPage.css'

class StockPage extends Component {
  constructor(props) {
    super(props)
    this.props.processUrl(this.props.match)
  }
  render() {
    let { isLoading, didError, notFound, stock } = this.props
    let contents =
      isLoading ? 'Loading stock ticker...' :
      didError ? 'Error loading stock ticker.' :
      notFound ? 'Stock symbol not found.' :
      <Stock {...stock} />
    return (
      <div className="StockPage">
        {contents}
      </div>
    )
  }
}

StockPage.propTypes = {
  isLoading: PropTypes.bool, // TODO: move this into a Request component.
  didError: PropTypes.bool,
  notFound: PropTypes.bool
}

let mapDispatchToProps = { processUrl: ({params}) => fetchStock(params.symbol) }

export default connect(state => state.stock, mapDispatchToProps)(StockPage)
