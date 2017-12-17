import { combineReducers } from 'redux'

import { stock } from 'reducers/stock'
import { navbar } from 'reducers/navbar'

export const reducer = combineReducers({
  stock,
  navbar
})

export default reducer
