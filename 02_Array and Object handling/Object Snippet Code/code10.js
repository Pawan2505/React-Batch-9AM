let user = { name: "Deepa" };
Object.freeze(user);
user.name = "Neha"; 
console.log(user.name); 
