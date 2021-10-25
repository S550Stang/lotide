const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==${expected}`);
  }
};

const tail = function (array) {
  if (array.length <= 1 || array === undefined || array === null) {
    return [];
  } else {
    return array.slice(1);
  }
};

console.log(tail([1, 2, 3, 4, 5, 6, 7, 8, 10]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
