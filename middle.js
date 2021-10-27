const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i in array1) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

/* user input =>
[ '1', '2', '3', '4', '5' ]
*/
const middle = function (array) {
  const preciseLength = array.length / 2;
  const flooredNumber = Math.round(array.length / 2);
  let leftArray = preciseLength - 1;
  let rightArray = preciseLength;
  let flooredOddNumber = flooredNumber - 1;
  const containingV = [];
  const emptyArray = [];
  if (array.length <= 2) {
    // check for length 1 or undefined

    return emptyArray;
  } else if (array.length % 2 === 0) {
    // checks for even
    containingV.push(array[leftArray], array[rightArray]);
    return containingV;
  } else if (array.length % 2 !== 0) {
    // check for odd
    containingV.push(array[flooredOddNumber]);
    return containingV;
  }
};

console.log(middle([1, 2, 3, 4]));

assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); // true
