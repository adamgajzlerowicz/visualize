import React from 'react'
import ReactDOM from 'react-dom'
import { Reset } from 'styled-reset'

import Home from './components/Home'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => (
  <Provider store={store}>
    <Reset />
    <Home />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
