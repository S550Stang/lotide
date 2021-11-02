const eqArrays = require("../eqArrays");
const { assert } = require("chai");

describe("#eqArrays", () => {
  it("return true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});
