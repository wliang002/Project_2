exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('classes', function (table) {
      // Adds an auto incrementing column and uses it as the primary key
      table.increments('id')
      table.string('teacher', 255).notNullable()
      table.string('eventname', 255).notNullable()
      table.string('category', 255).notNullable()
      table.string('eventlocation', 255).notNullable()
      table.string('eventdate', 255).notNullable()
      table.string('eventtime', 255).notNullable()
      table.string('eventdescription', 255).notNullable()
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('classes')
}
