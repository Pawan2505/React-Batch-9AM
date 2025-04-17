let obj = { info: { details: { email: "a@b.com" } } };
let {
  info: {
    details: { email: userEmail },
  },
} = obj;
console.log(userEmail);
