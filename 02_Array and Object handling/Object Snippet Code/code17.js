let params = { name: "Amit", age: 25 };
let query = Object.entries(params)
  .map(([k, v]) => `${k}=${v}`)
  .join("&");
console.log(query); 
