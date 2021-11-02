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

const takeUntil = function (array, callback) {
  let slicedArray = [];

  for (let i of array) {
    slicedArray.push(i);
    if (callback(i)) {
      slicedArray.pop();
      return slicedArray;
    }
  }
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

console.log(assertArrayEquals(results2, ["I've", "been", "to", "Hollywood"]));
