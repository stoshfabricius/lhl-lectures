/*
  LHL Lecture W01D2: Scope
  Stosh Fabricius
  2018
*/

var x = 0;
{
  var x = 1;
  {
    var x = 2;
  }
  console.log('x1', x)
  x = 3
}
console.log('x2', x)

// What do we expect to see?
