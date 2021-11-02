const eqObjects = require("./eqObjects"); //calling eqobj fun
const assertEqual = require("./assertEqual"); //calling test fun

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  /**Todo:
   *output to be:{ a: '1', b: 2 } === { b: 2, a: '1' }
   */
  const inspect = require("util").inspect;
  let obj1 = `${inspect(actual)}`; // object

  let obj2 = `${inspect(expected)}`; // object
  // let eqval = eqObjects(actual, expected);

  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${obj1} === ${obj2}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${obj1} !== ${obj2}`);
  }
};

assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" });
