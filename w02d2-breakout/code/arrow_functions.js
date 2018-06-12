// Arrow functions
///////////////////

// Look at different examples: http://es6-features.org/#ExpressionBodies

// regular function expression:
var add = function add (x, y) {
  return x + y;
};

// similar function in arrow function syntax:
var add2 = (x, y) => { return x + y; };

// add2 is still a function. It's almost the same. BUT:
// - arrow functions don't *replace* non-arrow functions
// - arrow functions behave differently than non-arrow functions
//
// We can have arrow functions with a body with multiple statements, using braces:
var add3 = (x, y) => {
  var result = x + y;
  return result;
}

// Or arrow functions with simple bodies of only one expression, omitting the `return` keyword:
var add4 = (x, y) => x + y;

// parentheses are optional if there's only one argument:
var double  =  x  => x * 2;
var double2 = (x) => x * 2;

// Generally:
// - functions defined and passed inline as arguments (*i.e.* callbacks) are good candidates for arrow functions
// - arrow functions are always anonymous!

// The other big issue is how arrow functions deal with `this`
// - they never have their own `this` value - they inherit it from the surrounding scope

// Function Deleration
var test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());
