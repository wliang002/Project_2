// Dependencies
const Class = require('../models/classes')

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */

module.exports = function (app) {
  // Get all classes
  app.get('/api/events', function (req, res) {
    Class.findAll()
      .then(function (dbClasses) {
        res.json(dbClasses)
      })
  })

  // Create a new class
  app.post('/api/events', function (req, res) {
    Class.create(req.body)
      .then(function (dbClass) {
        res.json(dbClass)
      })
  })

  // Delete a class by id
  app.delete('/api/events/:id', function (req, res) {
    Class.destroy(req.params)
      .then(function (dbClass) {
        res.json(dbClass)
      })
  })
}
