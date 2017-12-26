const express = require('express')
const app = express()

const port = process.env.port || 3001

//placeholders for API cals
const dashboardJSON = require('./mock/dashboard.json')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/dashboard', (req, res) => {
  res.json(dashboardJSON)
})

app.listen(port)