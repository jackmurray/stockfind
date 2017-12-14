import React, { Component } from 'react'
import Home from 'components/Home'
import Navbar from 'components/Navbar'
import Stock from 'components/Stock'
import axios from 'axios'
import BarchartAPIKey from 'settings/BarchartAPIKey' // You must create this

import './App.css'

class App extends Component {

  state = {
    isLoading: false,
    isError: false,
    isNotFound: false,
    symbol: null,
    exchange: null,
    changeUp: false,
    lastPrice: null,
    change: null,
    percentChange: null,
  }

  _handleResponse(response) {
    this.setState({isLoading: false})

    console.log("in handle response doggg");
    if (response.data.status.code === 204) {
      this.setState({isNotFound: true})
      return
    }
    if (response.data.results.length !== 1) this.setState({isNotFound: true})
    this.setState({symbol: response.data.results[0].symbol})
    this.setState({exchange: response.data.results[0].exchange})
    this.setState({changeUp: response.data.results[0].netChange >= 0})
    this.setState({lastPrice: response.data.results[0].lastPrice})
    this.setState({change: response.data.results[0].netChange})
    this.setState({percentChange: response.data.results[0].percentChange})
  }

  _handleError(error) {
    console.log("IN HANDEL ERROR WTF");
    this.setState({isLoading: false});
    this.setState({isError: true});
  }

  handleSearch(symbol) {
    if (symbol === '') return; // Do nothing club
    this.setState({isLoading: true, error: false, isNotFound: false})
    this.setState({searchTerm:symbol.toUpperCase()})
    axios.get('https://marketdata.websol.barchart.com/getQuote.json', {
      params: {
        apikey: BarchartAPIKey,
        symbols: symbol.toUpperCase()
      }
    }).then(this._handleResponse.bind(this))
      .catch(this._handleError.bind(this))
  }

  render() {
    if (this.state.searchTerm) {
      return (
        <div>
          <Navbar searchTerm={this.state.searchTerm}
                  onSearch={this.handleSearch.bind(this)} />
          <Stock isLoading={this.state.isLoading}
                 error={this.state.error}
                 isNotFound={this.state.isNotFound}
                 {...this.state} />
        </div>
      )
    }
    return <Home onSearch={this.handleSearch.bind(this)} />
  }
}

export default App
