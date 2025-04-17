let arr = [[1], [2], [3]];
let merged = arr.reduce((acc, val) => acc.concat(val), []);
console.log(merged);
