const config = require('./config.json')
const express = require('express')
const db = require('mongoose')
const app = express()

const middleware = {
  cors: require('./middlewares/cors')
}

const controller = {
  workshop: require('./controllers/workshop')
}

const port = process.env.port || 3002

for (const m in middleware) {
  app.use(middleware[m])
}

for (const c in controller) {
  app.use('/' + c, controller[c])
}

db.connect(config.mongo)
app.listen(port)


