// Dependecies
// const Example = require('../models/example')

const path = require('path')

/**
 * htmlRoutes: This routes file renders views e.g. handlebars pages
 * It differs from the apiRoutes.js file in that it responds to the client/view requests with a
 * handlebars page where the apiRoutes.js responds with data onlu
 *
 */
module.exports = function (app) {
  app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

  app.get('/learn', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/learn.html'))
  })

  app.get('/teach', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/teach.html'))
  })

  // If no matching route is found default to home
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })
}
