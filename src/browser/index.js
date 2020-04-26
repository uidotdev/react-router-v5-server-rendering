import * as React from 'react'
import ReactDOM from 'react-dom'
import App from '../shared/App'

ReactDOM.hydrate(
  <App />,
  document.getElementById('app')
)