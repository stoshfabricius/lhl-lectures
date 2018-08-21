
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('movies', table => {
    table.biginteger('rating').default(0)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('movies', table => {
    table.dropColumn('rating')
  })
};
