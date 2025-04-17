const prices = new Map([
  ["apple", 30],
  ["banana", 20],
]);

prices.forEach((value, key) => {
  console.log(`${key}: ₹${value}`);
});
