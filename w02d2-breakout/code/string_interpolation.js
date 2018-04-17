// String interpolation is simple:
//
var person = {
  name: 'joe javascript',
  age: 24
};

// Instead of:
console.log("My name is " + person.name + " and my age is " + person.age);

// You can use:
console.log(`My name is ${person.name} and my age is ${person.age}`);

// You can have any JS expression in the braces:
console.log(`324 * 543 = ${324 * 543}`);

// A string with backticks as delimiters is called a "template string".
// backtick-enclosed strings are the only strings that do iterpolation.
// Interpolation just means it will execute the expression as javascript
// and include that value at that point in the string.

// That's pretty much all you need to know.
