import * as React from 'react'
import ReactDOM from 'react-dom'
import App from '../shared/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.hydrate(
  <BrowserRouter>
    <App data={window.__INITIAL_DATA__} />
  </BrowserRouter>,
  document.getElementById('app')
)