
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('movies', table => {
    table.dropColumn('winner')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('movies', table => {
    table.boolean('winner').default(false)
  })
};
