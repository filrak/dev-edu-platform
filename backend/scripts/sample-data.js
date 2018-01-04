const config = require('./../config.json')
const express = require('express')
const workshop = require('../models/workshop')
const db = require('mongoose')
const app = express()
db.connect(config.mongo)

workshop.add({
    title: "Podstawy Vue #1",
    author: {    
        firstName: "Filip",
        lastName: "Rakowski",
        email: "frakowski@divante.pl"
    },
    date: new Date(),
    duration: 90,
    description: "Szkolenie z podstaw VueJS",
    type: "front",
    attendants: [{
        firstName: "Filip",
        lastName: "Rakowski",
        email: "frakowski@divante.pl"
    }]
}, () => db.connection.close() )
