import * as React from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import NoMatch from './NoMatch'
import ColorfulBorder from './ColorfulBorder'
import './styles.css'

export default function App (props) {
  return (
    <React.Fragment>
      <ColorfulBorder />
      <div className='container'>
        <Navbar />

        <Switch>
          {routes.map(({ path, exact, fetchInitialData, component: C }) => (
            <Route key={path} path={path} exact={exact}>
              <C
                fetchInitialData={fetchInitialData}
                repos={props.data}
              />
            </Route>
          ))}
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  )
}