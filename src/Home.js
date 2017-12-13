import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  state = {
    stock: ''
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.history.push(`/stocks/${this.state.stock}`);
    }
  }

  render() {
    return (
      <div className="Home">
        <h1 className="title">StockFind</h1>
        <div className="search">
          <input
            name="search"
            onChange={(e) => this.setState({stock: e.target.value})}
            onKeyPress={this._handleKeyPress.bind(this)}
            placeholder="Search by ticker..."
            autoFocus
          />
          <Link className="button" to={`/stocks/${this.state.stock}`}>
            Search
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
