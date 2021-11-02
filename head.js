// FUNCTION IMPLEMENTATION

const assert = require(/assertEqual);

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const head = function (array) {
  if (array === undefined || array === null) {
    return undefined;
  } else {
    return array[0];
  }
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
