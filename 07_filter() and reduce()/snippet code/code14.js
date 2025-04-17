let nums = [1, 2, 3, 4, 5];
let sumEven = nums.reduce(
  (total, num) => (num % 2 === 0 ? total + num : total),
  0
);
console.log(sumEven);
