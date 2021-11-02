const { assert } = require("chai");
const tail = require("../tail");

describe("#Tail", () => {
  it("returns '2' for 2", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });
});
describe("#Tail", () => {
  it(`["Lighthouse", "Labs","Yellow","Pink"] for 2`, () => {
    assert.deepEqual(
      tail(["Yo Yo", "Lighthouse", "Labs", "Yellow", "Pink"]).length,
      4
    );
  });
});
