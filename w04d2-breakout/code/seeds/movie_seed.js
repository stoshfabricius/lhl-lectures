
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {name: 'Call Me By Your Name', year: '2018'},
        {name: 'Get Out', year: '2018'},
        {name: 'Dunkirk', year: '2018'},
        {name: 'Lady Bird', year: '2018'},
        {name: 'Moonlight', year: '2017'},
        {name: 'La La Land', year: '2017'},
        {name: 'Fences', year: '2017'},
        {name: 'The Danish Girl', year: '2016'},
        {name: 'Spotlight', year: '2016'},
        {name: 'Mad Max: Fury Road', year: '2016'}
      ]);
    });
};
