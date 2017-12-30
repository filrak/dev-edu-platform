const express = require('express')
const workshop = require('../models/workshop')
const user = require('../models/user')
const router = express.Router()

router.get('/', (req, res) => {
   workshop.get(req.query).then( data => res.json(data))
})

module.exports = router