import express from "express"
import cors from "cors"
import ReactDOM from "react-dom/server"
import * as React from 'react'
import App from '../shared/App'
import serialize from "serialize-javascript"
import { fetchPopularRepos } from '../shared/api'

const app = express()

app.use(cors())
app.use(express.static("dist"))

app.get("*", (req, res, next) => {
  fetchPopularRepos()
    .then((data) => {
      const markup = ReactDOM.renderToString(
        <App data={data} />
      )

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR with RRv5</title>
            <script src="/bundle.js" defer></script>
            <link href="/main.css" rel="stylesheet">
            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
          </head>

          <body>
            <div id="app">${markup}</div>
          </body>
        </html>
      `)
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})