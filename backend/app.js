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

for (const m in middleware) {
  app.use(middleware[m])
}

for (const c in controller) {
  app.use('/' + c, controller[c])
}

app.listen(port)