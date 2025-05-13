// let arr = [23, 45, 67, 898];

// for loop

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let item of arr) {
//     console.log(item);
// }

// arr.forEach((item) => console.log(item))

// for (let index in arr) {
//     console.log(arr[index])
// }

// Object Literal

// let person = {
//     name: "Pawan",
//     age: 25
// }

// console.log(person)

// person.salary = 100000000;

// console.log(person)

// person.age = 26;

// console.log(person);

// delete person.age;

// console.log(person);

// Object Constructor

// const newArray = new Object();

// console.log(newArray)

// newArray.name = "Pawan"
// console.log(newArray["name"]);

// const person = {
//     name: "Amit",
//     age : 28
// }

// console.log(person)

// console.log(Object.keys(person))

// console.log(Object.values(person))

// console.log(Object.entries(person))

// const person = {
//   name: "Amit",
//   age: 28,
// };

// Object.freeze(person);

// person.id = 12; // not work
// console.log(person)

// delete person.age;

// console.log(person)

// person.name = "Ram"

// console.log(person)

// const obj1 = {
//     name : "Pawan"
// }

// const obj2 = {
//     age:28
// }

// const merge = Object.assign({}, obj1, obj2);

// console.log(merge)

// let arr = [12, 34, 56, 78];

// console.log(arr)

// console.log(...arr);

// const brr = [...arr, 122];

// brr.push(111);

// console.log(brr)

// console.log(arr);

// const person = {
//     name: "Amit",
//     age : 28
// }

// const p2 = { ...person, id : 1 , name : "Pawan"};
// console.log(p2)

// const arr1 = [12, 34, 56];
// const arr2 = [45, 67, 89];

// const mergeArray = [...arr1, ...arr2];

// console.log(mergeArray);

const obj1 = {
  name: "Pawan",
};

const obj2 = {
  age: 28,
};

const objMerge = { ...obj1, ...obj2 };

console.log(objMerge);
