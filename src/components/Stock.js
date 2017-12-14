import React, { Component } from 'react'

import FontAwesome from 'react-fontawesome'

import './Stock.css'

class Stock extends Component {

  render() {
    var {isLoading, isError, isNotFound} = this.props;
    if (isError) {
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
    if (isNotFound) {
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
              {this.props.symbol}
            </div>
            <div className="exchange">
              {this.props.exchange}
            </div>
            <div className="change">
              <FontAwesome
                size="lg"
                name={this.props.changeUp ? "arrow-up" : "arrow-down" } />
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
                  <td>{this.props.change}</td>
                </tr>
                <tr>
                  <td>Percent Change:</td>
                  <td>{this.props.percentChange} %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Stock;
