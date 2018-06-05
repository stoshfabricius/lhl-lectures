// Function declared as an expression
// the function is anonymous as the function does not have a name
// These are convenient when passing a function as an argument to another function
var add = function(a,b) {
  return a + b
}
console.log('Adding 1 + 2', add(1,2))


// Function declared using function definition
function subtract(a, b) {
  return a - b
}

console.log('Subtracting 3 -2 ',subtract(3,2))

// What happens if we move the console.log above the function definition


// Note: Function hoisting only works with functions created using function decleration, not function expressions
