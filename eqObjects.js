const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");

const eqObjects = function (object1, object2) {
  let keysOfObject1 = Object.keys(object1);
  let keysOfObject2 = Object.keys(object2);

  if (keysOfObject2.length !== keysOfObject1.length) {
    return false;
  }

  for (let key of keysOfObject1) {
    // checking if the keys are objects and if they are then recurssion occurs !!
    if (object1[key] instanceof Object && object2[key] instanceof Object) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (
      Array.isArray(object1[key]) &&
      Array.isArray(object2[key]) &&
      !eqArrays(object1[key], object2[key])
    ) {
      return false;
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };
const ab = { a: "1", b: 2 };
const ba = { b: 2, a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };

eqObjects(cd, cd2); // => false
// assertEqual(eqObjects(ab, ba), true);

// assertEqual(eqObjects(cd, dc), true);
