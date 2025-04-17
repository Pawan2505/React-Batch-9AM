function getUser() {
  return { id: 101, role: "admin" };
}
let { id } = getUser();
console.log(id);
