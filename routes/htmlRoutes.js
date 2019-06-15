// Dependecies
// const tableData = require('../models/classes')

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

  app.get('/teach', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/teach.html'))
  })

  // If no matching route is found default to home
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })
}

// code to use handlebars
// Dependencies
const Class = require('../models/classes')

module.exports = function (app) {

  // Load index page
  app.get('/', function (req, res) {
    Class.findAll({})
      .then(function (dbExamples) {
        res.render('index', {
          msg: 'Welcome!',
          examples: dbExamples
        })
      })
  })

  // this only returns classes from the chosen category -- for "learn" pages
  app.get('/learn/:category', function (req, res) {
    var chosenCategory = req.params.category
    // this logs in the terminal
    console.log(`category selected: ${chosenCategory}`)
    Class.find({
      category: chosenCategory
    })
      .then(function (classesInCategory) {
        console.log(`classes in the chosen category: ${classesInCategory}`)
        res.render('learn', classesInCategory[0])
      })
  })
}
