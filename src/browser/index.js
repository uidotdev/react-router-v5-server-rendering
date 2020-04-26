import * as React from 'react'
import ReactDOM from 'react-dom'
import App from '../shared/App'

ReactDOM.hydrate(
  <App data={window.__INITIAL_DATA__} />,
  document.getElementById('app')
)