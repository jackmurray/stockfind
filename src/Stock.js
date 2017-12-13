import React, { Component } from 'react';
import Navbar from './Navbar';
import './Stock.css';

class Stock extends Component {
  render(match) {
    return (
      <div>
        <Navbar/>
        <div className="Stock">
          <div className="left">
            <div className="code">
              {this.props.match.params.stock}
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
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Stock;
