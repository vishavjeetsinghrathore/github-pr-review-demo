# Intentional bug for a test pull request

Replace the safe return line in `src/pricing.js`:

```js
return Number((price * (1 - discountPercent / 100)).toFixed(2));
```

with this intentionally incorrect line:

```js
return Number((price * (1 + discountPercent / 100)).toFixed(2));
```

Expected review finding:
- A discount increases the price instead of reducing it.
- For price 100 and discount 15, the function returns 115 instead of 85.
- The existing percentage-discount test should fail.

Do not copy the buggy line into your default branch.
