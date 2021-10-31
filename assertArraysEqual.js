// const eqArrays = function (array1, array2) {
//   if (array1.length === array2.length) {
//     for (let i in array1) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//     return true;
//   } else {
//     return false;
//   }
// };

const assertArrayEquals = function (arrayOne, arrayTwo) {
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
};

// assertArrayEquals(eqArrays(arr));

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
