const middle = function (array) {
  const preciseLength = array.length / 2;
  const flooredNumber = Math.round(array.length / 2);
  let leftArray = preciseLength - 1;
  let rightArray = preciseLength;
  let flooredOddNumber = flooredNumber - 1;
  const containingV = [];
  const emptyArray = [];
  if (array.length <= 2) {
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

module.exports = middle;
// true
