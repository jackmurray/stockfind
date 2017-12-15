import axios from 'axios'
import { push } from 'react-router-redux'

import { setBreadcrumb } from 'actions/navbar'

export const ASYNC_REQUEST = 'ASYNC_REQUEST'
export const ASYNC_ERROR = 'ASYNC_ERROR'
export const ASYNC_RESPONSE = 'ASYNC_RESPONSE'

// TODO: separate this into transition actions and ajax actions.

export const fetchStock = symbol => (dispatch, getState) => {
  symbol = symbol.toUpperCase()
  dispatch(setBreadcrumb(symbol))
  dispatch(push(`/stocks/${symbol}`))
  dispatch({ type: ASYNC_REQUEST })
  axios.get('/api/search', {
    params: {
      symbol: symbol
    }
  }).then(response => dispatch({ type: ASYNC_RESPONSE, response })) // could probably set the shit properly here.
    .catch(error => dispatch({ type: ASYNC_ERROR }))
}
