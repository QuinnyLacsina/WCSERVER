//Name: Lacsina, Quinny Joyce Ann M.
//Section: WD-201
//App Name: query-demo.js
//Date: February 24, 2022
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log(req.query)
})
app.listen(8080)