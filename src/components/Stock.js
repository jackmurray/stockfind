import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import './Stock.css'

class Stock extends Component {
  render() {
    return (
      <div className="Stock">
        <div className="left">
          <div className="symbol">
            {this.props.symbol}
          </div>
          <div className="exchange">
            {this.props.exchange}
          </div>
          <div className="change">
            <FontAwesome
              size="lg"
              name={this.props.netChange > 0 ? "arrow-up" : "arrow-down" } />
          </div>
        </div>
        <div className="right">
          <table>
            <tbody>
              <tr>
                <td>Last Price:</td>
                <td>$ {this.props.lastPrice}</td>
              </tr>
              <tr>
                <td>Change:</td>
                <td>{this.props.netChange}</td>
              </tr>
              <tr>
                <td>Percent Change:</td>
                <td>{this.props.percentChange} %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

Stock.propTypes = {
  symbol: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
  lastPrice: PropTypes.number.isRequired,
  netChange: PropTypes.number.isRequired,
  percentChange: PropTypes.number.isRequired,
}

export default Stock
