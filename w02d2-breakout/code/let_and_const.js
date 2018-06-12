// let and const

// the `outer` function creates a new scope (function scope)
// function outer () {
//   console.log('Id i defined here?', i)
//   for (var i = 0; i < 10; i++) {
//     // As far as `var` is concerned, there's no such thing as
//     // for-block scope (or any block, other than function-body).
//     console.log(i)
//   }
//   console.log('Is I still defined out here?', i)
// }






// rewritten, but the exact same:
// function outerHoisted () {
//   var i; // <-- might as well declare it here, because it's hoisted

//   for (i = 0; i < 10; i++) { /* ... */ }
// }

// Introducing let:
///////////////////////

// With `let`, we now have block scope:
// function outerLet () {
//   for (let i = 0; i < 10; i++) {
//     // `i` is scoped to this for-block
//     console.log(i)
//   }
//   // `i` is undefined and undeclared out here.
// }

// showing block-scoping by shadowing function-scoped variable:
function outerShadowing () {
  let value = 'outer var';

  if (true) {
    // this is a block too!
    // Braces generally imply a block (unless it's an object literal).
    // console.log(value);
    // We still get somewhat hosited behaviour

    let value = 'inner var';
    console.log(value)
  }

  console.log(value)
}
outerShadowing();

// You can now even have blocks without for, if, etc...
{
  let iOnlyExistInsideTheseBraces = true;

  // but use cases for this are fairly limited
}


// What about `const`?
//////////////////////////////

// const defines constants. Kind of?
// Precisely speaking, it declares a variable and its initial value,
// and a variable declared with `const` cannot be re-assigned to a different value.
const konstant = "hello"

// const konstant = { quality: "unchanging!" };

// try to re-assign it:
// konstant = "something else"; // <-- throws TypeError: Assignment to constant variable.





// In the case of objects, it becomes important to say that *only the variable is
// constant*, but the object it points to can be modified.
// konstant.quality = "changing!"

// This does not violate const-ness. It's all assignment directly to the const variable.
// Object properties (keys) cannot be const, as they are not variables.



