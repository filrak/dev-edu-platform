const express = require('express')
const workshop = require('../models/workshop')
const router = express.Router()

router.get('/', (req, res) => {
   workshop.get({}).then( data => res.json(data))
})

module.exports = router