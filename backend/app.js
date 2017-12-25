const express = require('express')
const app = express()

const port = process.env.port || 3001


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

//placeholders for API
app.get('/dashboard', (req, res) => {
  res.json({
    user: {
      firsName: "John",
      lastName: "Doe"
    },
    workshops: [
      {
        title: "Podstawy NodeJS #1",
        author: "Filip Rakowski",
        date: "2018-01-12",
        duration: "90"
      },
      {
        title: "Podstawy NodeJS #2",
        author: "Filip Rakowski",
        date: "2018-01-18",
        duration: "60"
      }
    ]
    
  })
})

app.listen(port)