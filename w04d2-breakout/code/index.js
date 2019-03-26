/*
  LHL Lecture W04D2: Knex
  Stosh Fabricius
  2018
*/

//  Import Knex Configuration
const config = require('./knexfile.js')

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
// knex('movies')
//   .insert({name: 'Us', year: '2019'})
//   .returning('*')
//   .then(rows => console.log(rows))

// We can use all standard SQL keywords such as joins and limit
knex('movies')
  .join('actors', 'actors.movie_id', '=', 'movies.id')
  .select('actors.name as star', 'movies.name as movie', 'movies.year as year')
  .limit(10)
  .then(rows => console.log(rows))
  .catch(err => console.log(err.message))