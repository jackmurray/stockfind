import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker'

import App from 'containers/App'
import app from 'reducers/app'

import './index.css'

const history = createHistory()

const store = createStore(
  app,
  { stock: { isLoading: true } },
  applyMiddleware(
    thunk,
    routerMiddleware(history)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
