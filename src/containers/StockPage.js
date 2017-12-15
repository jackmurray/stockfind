import React, { Component } from 'react'
import { connect } from 'react-redux'

import Stock from 'components/Stock'

import { fetchStock } from 'actions/stock'

class StockPage extends Component {
  componentDidMount() {
    // NOTE: this is ugly but I consider it the entry point for the route.
    let symbol = this.props.match.params.symbol
    this.props.dispatch(fetchStock(symbol))
  }
  render() {
    var WrappedStock = connect(state => state.stock, {})(Stock)
    return <WrappedStock />
  }
}

export default connect()(StockPage)
