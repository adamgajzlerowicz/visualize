import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import { rootReducer } from './rootReducer'

const composeEnhancers =
  /* eslint-disable */
  // @ts-ignore
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
  /* eslint-enable */

export const store = createStore(combineReducers(rootReducer), composeEnhancers(applyMiddleware()))
