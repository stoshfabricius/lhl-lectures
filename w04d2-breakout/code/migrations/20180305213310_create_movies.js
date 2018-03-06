
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('movies', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('year')
    table.boolean('winner').default(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
};
