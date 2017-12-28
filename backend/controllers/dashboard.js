const express = require('express')
const router = express.Router()

const dashboardJSON = require('../mock/dashboard.json')

router.get('/', (req, res) => {
  res.json(dashboardJSON)
})

module.exports = router