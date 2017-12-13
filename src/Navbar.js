import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  state = {
    stock: ''
  }

  render() {
    return (
      <div className="Navbar">
        <h1 className="title">StockFind</h1>
        <div className="search">
          <input
            name="search"
            onChange={(e) => this.setState({stock: e.target.value})}
            placeholder="Search by ticker..."
          />
          <Link className="button" to={`/stocks/${this.state.stock}`}>Search</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;