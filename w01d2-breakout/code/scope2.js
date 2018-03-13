/*
  LHL Lecture W01D2: Scope
  Stosh Fabricius
  2018
*/

var name = "Ronald McDonald";

function sayName(thing, isDr) {

  function doctor() {
    return "Dr. " + name;
  }

  if (isDr) {
    console.log(doctor());
  } else {
    console.log(name);
  }

}

sayName("John Doe", false);
sayName("Phil", true);
sayName(name, true);
sayName(name, []);
doctor(); //won't work
