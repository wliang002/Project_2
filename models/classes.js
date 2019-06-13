// Dependencies
// =============================================================

// knex (lowercase) references my connection to the DB.
var knex = require('../config/connection.js')

// Creates a "Class" model that matches up with DB
var Class = {
  tableName: 'classes',

  findAll: function (queryOptions, tableName = this.tableName) {
    let whereCond = queryOptions.where || {}

    return new Promise((resolve, reject) => {
      knex
        .from(tableName)
        .select('*')
        .where(function () {
          if (Array.isArray(queryOptions.where)) {
            this.where(
              queryOptions.where[0],
              queryOptions.where[1],
              queryOptions.where[2]
            )
          } else {
            this.where(whereCond)
          }
        })
        .then(results => resolve(results))
    })
  },

  create: function (insertColVals, tableName = this.tableName) {
    // insert into our table
    return new Promise((resolve, reject) => {
      knex(tableName)
        .insert(insertColVals)
        .returning('id')
        .then(results => resolve(results))
    })
  },

  destroy: function (queryOptions, tableName = this.tableName) {
    return new Promise((resolve, reject) => {
      knex(tableName)
        .where(queryOptions.where)
        .del()
        .then(results => resolve(results))
    })
  }
}

// Makes the Class Model available for other files (will also create a table)
module.exports = Class
