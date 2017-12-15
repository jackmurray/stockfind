import { combineReducers } from 'redux'

import { stock } from 'reducers/stock'
import { navbar } from 'reducers/navbar'

export const app = combineReducers({
  stock,
  navbar
})

export default app
