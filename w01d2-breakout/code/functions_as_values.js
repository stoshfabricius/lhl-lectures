// Function declared as an expression
// The function is anonymous as the function does not have a name
// However, a name can be provided with a function expression 
// and can be used inside the function to refer to itself,
// or in a debugger to identify the function in stack traces:
// These are convenient when passing a function as an argument to another function

var add = function(a,b) {
  return a + b
}
console.log('Adding 5 + 6', add(5,6))


// Function declared using function definition 
// (also called function declaration, or function statement)
function subtract(a, b) {
  return a - b
}

console.log('Subtracting 3 -2 ', subtract(3,2))

// What happens if we move the console.log above the function definition


// Note: Function hoisting only works with
// functions created using function decleration, not function expressions
