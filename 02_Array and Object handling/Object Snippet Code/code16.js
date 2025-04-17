let marks = { math: 80, english: 70, science: 90 };
let total = Object.values(marks).reduce((sum, val) => sum + val, 0);
console.log(total); 
