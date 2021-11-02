const tail = function (array) {
  if (array.length <= 1 || array === undefined || array === null) {
    return [];
  } else {
    return array.slice(1);
  }
};

module.exports = tail;
