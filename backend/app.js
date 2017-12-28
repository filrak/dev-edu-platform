const express = require('express')
const app = express()

const middleware = {
  cors: require('./middlewares/cors')
}

const controller = {
  dashboard: require('./controllers/dashboard'),
  workshop: require('./controllers/workshop')
}

const port = process.env.port || 3001

app.use(middleware.cors)

app.use('/dashboard', controller.dashboard)
app.use('/workshop', controller.workshop)

app.listen(port)