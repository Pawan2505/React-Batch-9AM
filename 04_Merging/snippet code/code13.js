let obj1 = { user: { name: "Raj" } };
let obj2 = { user: { age: 30 } };
let merged = {
  user: {
    ...obj1.user,
    ...obj2.user,
  },
};
console.log(merged);
