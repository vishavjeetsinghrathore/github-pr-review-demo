const test = require("node:test");
const assert = require("node:assert/strict");
const { calculateDiscount } = require("../src/pricing");

test("calculates a percentage discount", () => {
  assert.equal(calculateDiscount(100, 15), 85);
});
test("supports a full discount", () => {
  assert.equal(calculateDiscount(50, 100), 0);
});
test("rejects a discount above 100 percent", () => {
  assert.throws(() => calculateDiscount(100, 120), /between 0 and 100/);
});
test("rejects a negative price", () => {
  assert.throws(() => calculateDiscount(-1, 10), /non-negative/);
});
