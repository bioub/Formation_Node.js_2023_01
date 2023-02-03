const { it, describe } = require("mocha");
const { expect } = require("chai");
const { sum } = require("./my-maths");

describe("sum function", () => {
  it("should add positive numbers", () => {
    expect(sum(1, 2)).to.equal(3);
  });

  it("should add negative numbers", () => {
    expect(sum(-1, -2)).to.equal(-3);
  });
});
