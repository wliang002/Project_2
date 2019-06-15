// Dependencies
const Class = require('../models/classes')

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */

module.exports = function (app) {
  // this gets all classes by returning the entire dataset -- used for page category buttons via index.js
  app.get('/allData', function (req, res) {
    Class.findAll()
      .then(function (dbClasses) {
        res.json(dbClasses)
      })
  })

  // this only returns classes from the chosen category -- for "learn" pages
  app.get('/learn/:category', function (req, res) {
    var chosenCategory = req.params.category
    // this logs in the terminal
    console.log(`category selected: ${chosenCategory}`)
    Class.find({
      category: chosenCategory }
    ).then(results => {
      console.log(`Class.find(): ${results.length ? results : 'No records found'}`)
      res.json(results)
    })
  })

  // this creates a new class in the database -- for teach
  app.post('/teach', function (req, res) {
    Class.create(req.body)
      .then(function (dbClass) {
        res.json(dbClass)
      })
  })

  // this only returns classes from a chosen teacher -- for "teach" pages
  app.get('/teach/:teacher', function (req, res) {
    var chosenTeacher = req.params.teacher
    console.log(`category selected: ${chosenTeacher}`)
    Class.find({
      category: chosenTeacher }
    ).then(results => {
      console.log(`Class.find(): ${results.length ? results : 'No records found'}`)
      res.json(results)
    })
  })

  // // !!!! this one needs to be reworked based on how teach page wants to delete classes
  // Delete a class by id
  app.delete('/teach/:id', function (req, res) {
    Class.destroy(req.params)
      .then(function (dbClass) {
        res.json(dbClass)
      })
  })
}
