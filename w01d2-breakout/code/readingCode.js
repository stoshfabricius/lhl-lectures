
var x = 2;
var y = 3;

// Will this work?
console.log('What is ' + x + '+' +  y + ' ?');
console.log('It is: ', add(x,y))


// Load code from other files
// var subtract = require('./subtract.js');

// var a = 3;
// var b = 2;

// console.log('What is ' + a + '-' +  b + ' ?');
// console.log('It is: ', subtract(a,b))

// console.log('Look how good we are at math!')


// Control flow of the program using loops

// console.log('Look how many times I can loop', i)
// for (var i = 0; i < 10, i++) {
//   console.log('Loop', i)
// }


function add(x,y) {
  return x + y;
}