
exports.seed = function(knex, Promise) {

  function deleteActors() {
    return knex('actors').del()
  }

  function deleteMovies() {
    return knex('movies').del()
  }

  function insertMovies() {
    return knex('movies').insert([
      {name: 'Call Me By Your Name', year: '2018'},
      {name: 'La La Land', year: '2017'},
      {name: 'Mad Max: Fury Road', year: '2016'},
      {name: 'Get Out', year: '2018'},
      {name: 'Dunkirk', year: '2018'},
      {name: 'Lady Bird', year: '2018'},
      {name: 'Moonlight', year: '2017'},
      {name: 'Fences', year: '2017'},
      {name: 'The Danish Girl', year: '2016'},
      {name: 'Spotlight', year: '2016'}
    ]).returning('*');
  }

  function insertActors(movies) {
    return knex('actors').insert([
      {name: 'Arnie Hammer', movie_id: movies[0].id},
      {name: 'Emma Stone', movie_id: movies[1].id},
      {name: 'Tom Hardy', movie_id: movies[2].id}
    ]);
  }

  return deleteActors()
    .then(deleteMovies)
    .then(insertMovies)
    .then(movies => insertActors(movies))

};
