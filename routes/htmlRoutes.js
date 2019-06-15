// Dependecies
// const tableData = require('../models/classes')

const path = require('path')
const Classes = require('../models/classes')
/**
 * htmlRoutes: This routes file renders views e.g. handlebars pages
 * It differs from the apiRoutes.js file in that it responds to the client/view requests with a
 * handlebars page where the apiRoutes.js responds with data onlu
 *
 */
// module.exports = function (app) {
//   app.get('/home', function (req, res) {
//     res.sendFile(path.join(__dirname, '../public/index.html'))
//   })

//   app.get('/teach', function (req, res) {
//     res.sendFile(path.join(__dirname, '../public/teach.html'))
//   })

//   // If no matching route is found default to home
//   app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../public/index.html'))
//   })
// }

// code to use handlebars
// Dependencies

module.exports = function (app) {
// Load index page
  app.get('/', function (req, res) {
    Classes.findAll(req.query)
      .then(function (dbClasses) {
        filterCategories(dbClasses, function (results) {
          res.render('index', { categories: results })
        })
      })
  })

  function filterCategories (dbClasses, cb) {
    var categories = []
    var list = []
    // console.log("all data", dbClasses)
    dbClasses.forEach(function (item) {
      if (!list.includes(item.category)) {
        list.push(item.category)
        var category = {
          text: item.category,
          url: item.category.replace(/\s/g, '-')
        }
        categories.push(category)
      }
    })
    
   cb(categories)
  }

  app.get('/learn/:category', function (req, res) {
    var chosenCategory = req.params.category
    chosenCategory = chosenCategory.replace(/-/g, ' ')
    Classes.find({
      category: chosenCategory
    })
      .then(function (dbClasses) {
            filterCategories(dbClasses, function (results) {
              console.log('category chosen   '+results)
              res.render('learn', {
                categories: results,
                classes: dbClasses
              })
            })
      })
  })

  // Load teach page
  app.get('/teach', function (req, res) {
    Classes.findAll(req.query)
      .then(function (dbClasses) {
        filterCategories(dbClasses, function (results) {
          res.render('teach', { categories: results,
            classes: dbClasses })
        })
      })
  })
}
