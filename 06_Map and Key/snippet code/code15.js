const users = [
  { id: 1, name: "Anil" },
  { id: 2, name: "Sunil" },
];

const userMap = new Map(users.map((user) => [user.id, user.name]));
console.log(userMap);
