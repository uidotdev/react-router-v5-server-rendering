import * as React from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import NoMatch from './NoMatch'
import ColorfulBorder from './ColorfulBorder'
import './styles.css'

export default function App () {
  return (
    <React.Fragment>
      <ColorfulBorder />
      <div className='container'>
        <Navbar />

        <Switch>
          {routes.map(({ path, exact, fetchInitialData, component: C }) => (
            <Route key={path} path={path} exact={exact} render={(props) => (
              <C fetchInitialData={fetchInitialData} {...props} />
            )} />
          ))}
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  )
}