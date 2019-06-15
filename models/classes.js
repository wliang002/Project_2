// ********** Hetty trying out new code **********

// Dependencies
// =============================================================
const knex = require('../config/connection.js')

/**
 * Queries the class database
 *
 * @class Class
 */
class Classes {
  constructor (table = 'classes') {
    this.table = table
    this.defaultOrder = { column: 'category', order: 'asc' }
  }

  /**
   *
   * Find all classes in the table
   * Use Object.assign to merge the this.defaultOrder and orderBy into a new object
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
   *
   * @default {Object} [orderBy={}] Optional Direction to order `category` column
   * @returns Promise
   * @memberof Classes
   */
  findAll (orderBy = {}) {
    let mergedOrder = Object.assign({}, this.defaultOrder, orderBy)
    console.log('findAll.mergedOrder = ', mergedOrder)
    return knex.select()
      .table(this.table)
      .orderBy([mergedOrder]) // object must be wrapped in an array: https://knexjs.org/#Builder-orderBy
  }

  /**
   * create a new class
   *
   * @param {Object} values The values to insert in the form of {column: value}
   * @returns Promise
   * @memberof Classes
   */
  create (values) {
    return knex(this.table)
      .returning('id')
      .insert(values)
  }

  /**
   * delete a class by id
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @returns Promise
   * @memberof Classes
   */
  destroy (where) {
    return knex(this.table)
      .where(where)
      .del()
  }

  /**
   * update a specific todo
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @param {Object} values The values to update in the form of {column: value}
   * @returns Promise
   * @memberof Classes
   */
  update (where, values) {
    return knex(this.table)
      .where(where)
      .update(values)
  }

  /**
   * Finds 1 or more classes based on search criteria
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @default {Object} [orderBy={}] Optional Direction to order `eventname` column
   * @returns Promise
   * @memberof Classes
   */
  find (where, orderBy = {}) {
    let mergedOrder = Object.assign({}, this.defaultOrder, orderBy)

    return knex(this.table)
      .where(where)
      .orderBy([mergedOrder]) // object must be wrapped in an array: https://knexjs.org/#Builder-orderBy
  }
};

module.exports = new Classes()

// // ******************** below is Diana's code ********************
// // Dependencies
// // =============================================================

// // // knex (lowercase) references my connection to the DB.
// // var knex = require('../config/connection.js')

// // Creates a "Class" model that matches up with DB
// var Class = {
//   tableName: 'classes',

//   findAll: function (queryOptions, tableName = this.tableName) {
//     let whereCond = queryOptions.where || {}

//     return new Promise((resolve, reject) => {
//       knex
//         .from(tableName)
//         .select('*')
//         .where(function () {
//           if (Array.isArray(queryOptions.where)) {
//             this.where(
//               queryOptions.where[0],
//               queryOptions.where[1],
//               queryOptions.where[2]
//             )
//           } else {
//             this.where(whereCond)
//           }
//         })
//         .then(results => resolve(results))
//     })
//   },

//   create: function (insertColVals, tableName = this.tableName) {
//     // insert into our table
//     return new Promise((resolve, reject) => {
//       knex(tableName)
//         .insert(insertColVals)
//         .returning('id')
//         .then(results => resolve(results))
//     })
//   },

//   destroy: function (queryOptions, tableName = this.tableName) {
//     return new Promise((resolve, reject) => {
//       knex(tableName)
//         .where(queryOptions.where)
//         .del()
//         .then(results => resolve(results))
//     })
//   }
// }

// // Makes the Class Model available for other files (will also create a table)
// module.exports = Class
