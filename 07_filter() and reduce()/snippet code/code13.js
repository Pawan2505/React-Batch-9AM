let nums = [3, 5, 7, 2];
let maxNum = nums.reduce((max, num) => (num > max ? num : max), nums[0]);
console.log(maxNum);
