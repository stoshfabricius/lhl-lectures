// This will allow us to load in ENV variables from the .env file
// The variables will be in the process.env object
require('dotenv').config()

// Require Dependencies and helper functions
var request = require('request');
var userInputHelpers = require('./getUserInput');

// Create high level constants
const API_KEY = process.env.API_KEY // Remember not to save API Keys and tokens in your github repo
const BASE_NEWS_URL = `https://newsapi.org/v2`
const TOP_HEADLINE = BASE_NEWS_URL + `/top-headlines?apiKey=${API_KEY}`

function main() {
  // Make sure use has supplied a valid argument
  var userInput = userInputHelpers.getUserInput()

  if (userInput.valid) {

    // User provided valid input
    var country = userInput.value
    request(TOP_HEADLINE + `&country=${country}`, function(error, response, body) {
      // Check that the request was successful
      if (error) {
        console.log('ERROR: ', error)
        return
      }
      //  If successfull the body will be returned as a big string, so we need to parse it
      var parsedBody = JSON.parse(body)

      // Now we can print the articles to the screen
      logArticlesToScreen(parsedBody.articles)
    })
  } else {
    // Print the error message to the user
    console.log(userInput.value)
  }
}

// Function to Log articles to console
function logArticlesToScreen(articles) {
  articles.forEach(function(article) {
      console.log('Title: ', article.title)
      console.log('Author: ', article.author)
      console.log('--------------')
  });
}

// Call main function
main()
