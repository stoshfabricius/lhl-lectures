/*
  LHL Lecture W01D2: Scope
  Stosh Fabricius
  2018
*/

function addBy(x) {

  function newFunc(y) {
    return y + x
  }

  return newFunc
}

var add2 = addBy(2)(3);
// var add3 = addBy(3);
// var add4 = addBy(4);

// console.log(add2(3));
console.log(add2);
