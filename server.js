// *********************************************************************************
// SERVER.JS - THIS FILE INITIATES YOUR ENTIRE APPLICATION. IT"S YOUR APP FOUNDATION!
// *********************************************************************************

require('dotenv').config()

const express = require('express')


const db = require('./models/example') // eslint-disable no-unused-consts
console.log(db)

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))

// Routes
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

// Starting our Express app
// =============================================================
app.listen(PORT, function () {
  console.log(
    '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
    PORT,
    PORT)
})

module.exports = app
