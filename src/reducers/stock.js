import { ASYNC_REQUEST,
         ASYNC_RESPONSE,
         ASYNC_ERROR } from 'actions/stock'

export const stock = (state = {}, action) => {
  switch (action.type) {
    case ASYNC_REQUEST:
      return { ...state, isLoading: true, didError: false }
    case ASYNC_RESPONSE:
      let results = action.response.data.results
      let notFound = (!results || results.length > 1)
      return { ...state, isLoading: false, didError: false, notFound, stock: notFound ? null : results[0] }
    case ASYNC_ERROR:
      return { ...state, isLoading: false, didError: true }
    default:
      return state
  }
}
