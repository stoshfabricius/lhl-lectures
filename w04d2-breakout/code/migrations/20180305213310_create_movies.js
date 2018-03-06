
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('movies', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('year')
    table.boolean('winner').default(false)
  }).then(data => {
    return knex.schema.createTableIfNotExists('actors', table => {
      table.increments('id').primary()
      table.string('name')
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies').then(data => {
    return knex.schema.dropTable('actors')
  })
};
