const without = (array1, array2) => {
  if (Array.isArray(array2)) {
    return array1.slice(array2);
  }
};
console.log(without([1, 2, 3], [2]));
