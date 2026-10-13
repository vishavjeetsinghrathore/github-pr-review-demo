const { calculateDiscount } = require("./pricing");
const { isValidEmail } = require("./validation");

const price = 100;
const discountPercent = 15;
const email = "customer@example.com";

console.log(`Price after discount: $${calculateDiscount(price, discountPercent)}`);
console.log(`Email valid: ${isValidEmail(email)}`);
