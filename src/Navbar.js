import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  state = {
    stock: '',
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.history.push(`/stocks/${this.state.stock}`);
    }
  }

  render() {
    return (
      <div className="Navbar">
        <h1 className="title">
          <Link to={`/`}>StockFind</Link>
          <span className="breadcrumb"> &gt; {this.props.stock}</span>
        </h1>
        <div className="search">
          <input
            name="search"
            onChange={(e) => this.setState({stock: e.target.value})}
            onKeyPress={this._handleKeyPress.bind(this)}
            placeholder="Search by ticker..."
          />
          <Link className="button" to={`/stocks/${this.state.stock}`}>
            Search
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
