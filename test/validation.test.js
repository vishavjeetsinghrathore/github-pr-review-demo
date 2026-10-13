const test = require("node:test");
const assert = require("node:assert/strict");
const { isValidEmail } = require("../src/validation");

test("accepts a basic email address", () => {
  assert.equal(isValidEmail("customer@example.com"), true);
});
test("rejects an email without an at sign", () => {
  assert.equal(isValidEmail("customer.example.com"), false);
});
test("trims surrounding whitespace", () => {
  assert.equal(isValidEmail("  customer@example.com  "), true);
});
