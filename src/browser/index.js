import * as React from 'react'
import ReactDOM from 'react-dom'
import App from '../shared/App'

ReactDOM.hydrate(
  <App data='Tyler' />,
  document.getElementById('app')
)