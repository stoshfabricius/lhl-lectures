/*
  LHL Lecture W04D2: Knex
  Stosh Fabricius
  2018
*/

//  Import Knex Configuration
const config = require('./knexfile.js')

// Make sure to create the database first
// CREATE DATABASE oscars;
// createdb oscars;

// Create Knex object using configuration
const knex = require('knex')(config)

// General Select Query
// knex('movies').select().asCallback(function(err, rows) {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(rows)
//   return
// })

// Same as above but using Promises
// knex('movies').select()
//   .then(rows => console.log(rows))
//   .catch(err => console.log(err.message))

// Insert values into the database
knex('movies').insert({title: 'Shawshank Redemption', year: '2014'}).returning('*')

// We can use all standard SQL keywords such as joins and limit
knex('movies')
  .join('actors', 'actors.movie_id', '=', 'movies.id')
  .select('actors.name as star', 'movies.name as movie', 'movies.year as year')
  .limit(10)
  .then(rows => console.log(rows))
  .catch(err => console.log(err.message))