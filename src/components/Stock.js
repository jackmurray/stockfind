import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

import './Stock.css'

class Stock extends Component {

  render() {
    // TODO: there's gotta be a better way of breaking this up.
    
    let { isLoading, didError, notFound, stock } = this.props
    if (didError) {
      return (
        <div>
          <div className="Stock">
            Error loading stock ticker.
          </div>
        </div>
      )
    }
    if (isLoading) {
      return (
        <div>
          <div className="Stock">
            Loading stock ticker...
          </div>
        </div>
      );
    }
    if (notFound) {
      return (
        <div>
          <div className="Stock">
            Stock symbol not found
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className="Stock">
          <div className="left">
            <div className="symbol">
              {stock.symbol}
            </div>
            <div className="exchange">
              {stock.exchange}
            </div>
            <div className="change">
              <FontAwesome
                size="lg"
                name={stock.netChange > 0 ? "arrow-up" : "arrow-down" } />
            </div>
          </div>
          <div className="right">
            <table>
              <tbody>
                <tr>
                  <td>Last Price:</td>
                  <td>$ {stock.lastPrice}</td>
                </tr>
                <tr>
                  <td>Change:</td>
                  <td>{stock.netChange}</td>
                </tr>
                <tr>
                  <td>Percent Change:</td>
                  <td>{stock.percentChange} %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Stock.propTypes = {
  isLoading: PropTypes.bool, // TODO: move this into a Request component.
  didError: PropTypes.bool,
  notFound: PropTypes.bool,
  stock: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    exchange: PropTypes.string.isRequired,
    lastPrice: PropTypes.number.isRequired,
    netChange: PropTypes.number.isRequired,
    percentChange: PropTypes.number.isRequired,
  })
}

export default Stock
