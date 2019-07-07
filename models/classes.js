// Dependencies
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
   * update a specific class
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
