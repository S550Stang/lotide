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

const assertArrayEquals = function (arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    for (let i in arrayOne) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const words = ["hello", "world", "lighthouse"];

const without = (array1, array2) => {
  return array1.filter((val) => !array2.includes(val));
};
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(words, ["lighthouse"]));
console.log(eqArrays(words, ["hello", "world", "lighthouse"]));
console.log(assertArrayEquals(words, ["hello", "world", "lighthouse"]));
