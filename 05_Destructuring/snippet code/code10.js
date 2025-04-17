let user = { profile: { id: 1, city: "Delhi" } };
let {
  profile: { city },
} = user;
console.log(city);
