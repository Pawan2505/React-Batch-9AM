let data = { a: 1, b: 2, c: 3 };
let filtered = Object.fromEntries(
  Object.entries(data).filter(([key, val]) => val > 1)
);
console.log(filtered);
