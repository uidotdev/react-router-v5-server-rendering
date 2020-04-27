import * as React from 'react'
import Grid from './Grid'
import './styles.css'

export default function App (props) {
  return (
   <div>
     <Grid repos={props.data} />
   </div>
  )
}