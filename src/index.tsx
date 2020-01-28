import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { Reset } from 'styled-reset'

import Home from './components/Home'
import { store } from './store'
import { GlobalStyles } from './index.styles'

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Reset />

    <Home />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
