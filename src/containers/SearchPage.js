import React, { Component } from 'react'
import axios from 'axios'

import Navbar from 'components/Navbar'
import Stock from 'components/Stock'

import BarchartAPIKey from 'settings/BarchartAPIKey' // You must create this

class SearchPage extends Component {

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

  componentDidMount() {
    this.handleSearch(this.props.match.params.symbol)
  }

  _handleResponse(response) {
    this.setState({isLoading: false})

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
    this.setState({isLoading: false});
    this.setState({isError: true});
  }

  handleSearch(symbol) {
    if (symbol === '') return; // Do nothing club
    this.setState({isLoading: true, isError: false, isNotFound: false})
    this.props.history.push(`/stocks/${symbol}`)
    axios.get('https://marketdata.websol.barchart.com/getQuote.json', {
      params: {
        apikey: BarchartAPIKey,
        symbols: symbol.toUpperCase()
      }
    }).then(this._handleResponse.bind(this))
      .catch(this._handleError.bind(this))
  }
  render() {
    return (
      <div>
        <Navbar searchTerm={this.props.match.params.symbol.toUpperCase()}
                onSearch={this.handleSearch.bind(this)} />
        <Stock {...this.state} />
      </div>
    )
  }
}

export default SearchPage
