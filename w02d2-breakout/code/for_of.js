// for...of: loop over "iterable" objects.
// Arrays and Strings are iterable. Many other collection-like objects are iterable, too.
// An item is interable if it supports the iterable protocol

var arr = [1, 5, 7, 3, 7];
for (var number of arr) {
  console.log("square of " + number + " is " + number * number);
}

// NOTE: Objects are not iterable.

// for (var value of obj) {}  -> Error!

// Contrast with for...in, which works (specifically) on objects:
var obj = { a: 1, b: 2 };
for (var key in obj) { /* ... */ }
