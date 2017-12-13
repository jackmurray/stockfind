import React, { Component } from 'react';
import Navbar from './Navbar';
import './Stock.css';

class Stock extends Component {

  render() {
    if (this.props.error) {
      return (
        <div>
          <Navbar history={this.props.history} stock={this.props.stock}/>
          <div className="Stock">
            Error Loading Stock Ticker, sorry :(
          </div>
        </div>
      );
    }
    if (!this.props.data) {
      return (
        <div>
          <Navbar history={this.props.history} stock={this.props.stock}/>
          <div className="Stock">
            Loading Stock Ticker...
          </div>
        </div>
      );
    }
    return (
      <div>
        <Navbar history={this.props.history} stock={this.props.stock}/>
        <div className="Stock">
          <div className="left">
            <div className="code">
              {this.props.stock}
            </div>
            <div className="exchange">
              NASDAQ
            </div>
            <div className="change">
              up arrow
            </div>
          </div>
          <div className="right">
            <table>
              <tbody>
                <tr>
                  <td>Last Price:</td>
                  <td>$ 195.73</td>
                </tr>
                <tr>
                  <td>Change:</td>
                  <td>1.35</td>
                </tr>
                <tr>
                  <td>Percent Change:</td>
                  <td>2.35 %</td>
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
