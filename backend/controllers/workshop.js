const express = require('express')
const router = express.Router()

const workshop1JSON = require('../mock/workshop/1.json')
const workshop2JSON = require('../mock/workshop/2.json')

router.get('/:id', (req, res) => {
  req.params.id == '1' ? res.json(workshop1JSON) : res.json(workshop2JSON)
})

module.exports = router