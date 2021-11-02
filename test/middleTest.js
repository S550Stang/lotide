const middle = require("../middle");
const { assert } = require("chai");

describe("#middle", () => {
  it("return [2, 3] for ([1, 2, 3, 4], [2, 3])", () => {
    assert.deepEqual(middle([1, 2, 3, 4], [2, 3]), [2, 3]);
  });
});
