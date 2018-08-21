
// Load in Database Connection
const config = require('./knexfile.js')
const knex = require('knex')(config)

// Accept a optional Search Term through the command line
const searchName = process.argv[2]

let query = knex('movies').select()

// If searchName is passed then we can furthur refine the query
if (searchName) {
  query = query.where('name', 'ilike', `%${searchName}%`)
}

query.then(rows => console.log(rows))
