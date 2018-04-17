// If the first statement in a file or a function is "use strict"
// then Strict Mode will be activated for that file or function.
//
// You could invoke strict mode for the file by uncommenting this:
// "use strict";


// Orignal variable decleration decleration
var number = [ 1, 2, 3, 4]

// Mistype variable name
// nmbers = [ 5, 6, 7]

// var x = "234"
// Help to stop us forgetting to define variable
function leakingGlobals() {
  x = 123;
}
leakingGlobals()

// console.log("We have leaked x to the global scope, X is: ", x)

function strictFunction () {
  "use strict";
  y = 654; // undeclared! throws ReferenceError

} // <-- strict mode ends here

// strictFunction();

