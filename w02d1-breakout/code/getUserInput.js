var COUNTRIES = require('./countries.js')

// Collect and clean user input
function getUserInput() {
  // Get user input from argv
  var rawUserInput = process.argv[2]

  // Is user did not provide an argument we can return
  if (!rawUserInput) {
    return {value: "Please provide a country", valid: false}
  }

  // Clean user input
  var trimmedInput = rawUserInput.trim()

  // Make sure value is in countries list
  if (!COUNTRIES.includes(trimmedInput)) {
    return {value: "Country not in approved list", valid: false}
  }

  return {value: trimmedInput, valid: true}
}

// Export the function
module.exports = {
    getUserInput: getUserInput,
}