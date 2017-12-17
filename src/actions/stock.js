import axios from 'axios'
import { push } from 'react-router-redux'

import { setBreadcrumb } from 'actions/navbar'

import BarchartAPIKey from 'settings/BarchartAPIKey' // You must create this

export const ASYNC_REQUEST = 'ASYNC_REQUEST'
export const ASYNC_ERROR = 'ASYNC_ERROR'
export const ASYNC_RESPONSE = 'ASYNC_RESPONSE'

export const fetchStock = symbol => (dispatch, getState) => {
  symbol = symbol.toUpperCase()
  dispatch(setBreadcrumb(symbol))
  dispatch(push(`/stocks/${symbol}`))
  dispatch({ type: ASYNC_REQUEST })
  axios.get('/api/stock', {
    params: {
      apikey: BarchartAPIKey,
      symbol: symbol
    }
  }).then(response => dispatch({ type: ASYNC_RESPONSE, response }))
    .catch(error => dispatch({ type: ASYNC_ERROR }))
}
