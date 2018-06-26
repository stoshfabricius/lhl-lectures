
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('year')
    table.boolean('winner').default(false)
  }).then(data => {
    return knex.schema.createTable('actors', table => {
      table.increments('id').primary()
      table.string('name')
      table.integer('movie_id').unsigned()
      table.foreign('movie_id').references('movies.id')
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actors')
    .then(data => knex.schema.dropTable('movies'))
};
