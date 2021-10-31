const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

let arryOfObjects = Object.keys(bestTVShowsByGenre);
console.log(arryOfObjects);

const findKeyByValue = function (tvobj, stringVal) {
  //return .find((key) => tvobj[key] === stringVal);

  for (let i of arryOfObjects) {
    if (tvobj[i] === stringVal) {
      return i;
    }
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
