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
//

console.log('Raw Query: \n', knex('movies').select().toString())
