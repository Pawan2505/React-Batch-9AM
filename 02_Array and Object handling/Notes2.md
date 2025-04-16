### **Available Array Methods in JavaScript**

Arrays in JavaScript come with built-in methods that help you add, remove, and modify elements.

---

#### **Basic Array Methods:**

- **push()**: Adds an element to the end of an array.

  ```javascript
  let fruits = ['apple', 'banana'];
  fruits.push('orange');
  console.log(fruits);  // ['apple', 'banana', 'orange']
  ```

- **pop()**: Removes the last element from the array.

  ```javascript
  fruits.pop();
  console.log(fruits);  // ['apple', 'banana']
  ```

- **shift()**: Removes the first element from the array.

  ```javascript
  fruits.shift();
  console.log(fruits);  // ['banana', 'orange']
  ```

- **unshift()**: Adds one or more elements to the beginning.

  ```javascript
  fruits.unshift('apple');
  console.log(fruits);  // ['apple', 'banana', 'orange']
  ```

- **concat()**: Combines two or more arrays.

  ```javascript
  let moreFruits = ['cherry', 'mango'];
  let allFruits = fruits.concat(moreFruits);
  console.log(allFruits);  // ['apple', 'banana', 'orange', 'cherry', 'mango']
  ```

- **slice()**: Extracts a portion of the array.

  ```javascript
  let someFruits = fruits.slice(1, 3);  // From index 1 to 2
  console.log(someFruits);  // ['banana', 'orange']
  ```

- **splice()**: Adds or removes elements from the array at a specific position.

  ```javascript
  fruits.splice(1, 1, 'mango');
  console.log(fruits);  // ['apple', 'mango', 'orange']
  ```

---

#### **Array Iteration Methods:**

- **forEach()**: Executes a function once for each array element.

  ```javascript
  fruits.forEach(function(fruit) {
    console.log(fruit);
  });
  // Output: apple, banana, orange
  ```

- **map()**: Creates a new array with the results of calling a function on each element.

  ```javascript
  let numbers = [1, 2, 3, 4];
  let doubled = numbers.map(num => num * 2);
  console.log(doubled);  // [2, 4, 6, 8]
  ```

- **filter()**: Creates a new array with elements that pass the test.

  ```javascript
  let evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log(evenNumbers);  // [2, 4]
  ```

- **reduce()**: Reduces the array to a single value.

  ```javascript
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(sum);  // 10
  ```

- **find()**: Finds the first element that satisfies the condition.

  ```javascript
  let firstEven = numbers.find(num => num % 2 === 0);
  console.log(firstEven);  // 2
  ```

- **includes()**: Checks if an element exists in the array.

  ```javascript
  console.log(fruits.includes('banana'));  // true
  console.log(fruits.includes('grape'));   // false
  ```

---

#### **Array Utility Methods:**

- **join()**: Combines all elements into a string.

  ```javascript
  let fruitString = fruits.join(', ');
  console.log(fruitString);  // "apple, banana, orange"
  ```

- **sort()**: Sorts the array elements.

  ```javascript
  numbers.sort();
  console.log(numbers);  // [1, 2, 3, 4]
  ```

- **reverse()**: Reverses the order of elements.

  ```javascript
  numbers.reverse();
  console.log(numbers);  // [4, 3, 2, 1]
  ```

- **findIndex()**: Finds the index of the first element that matches the condition.

  ```javascript
  let index = numbers.findIndex(num => num > 2);
  console.log(index);  // 0 (index of first element greater than 2)
  ```

---

### **Available Object Methods in JavaScript**

Objects also have useful methods for working with keys and values.

---

#### **Basic Object Methods:**

- **Object.keys()**: Returns an array of the object’s property names.

  ```javascript
  const person = { name: 'Rajesh', age: 28 };
  let keys = Object.keys(person);
  console.log(keys);  // ['name', 'age']
  ```

- **Object.values()**: Returns an array of the object’s values.

  ```javascript
  let values = Object.values(person);
  console.log(values);  // ['Rajesh', 28]
  ```

- **Object.entries()**: Returns an array of key-value pairs.

  ```javascript
  let entries = Object.entries(person);
  console.log(entries);  // [['name', 'Rajesh'], ['age', 28]]
  ```

- **Object.assign()**: Copies properties from one object to another.

  ```javascript
  const details = { city: 'Delhi' };
  const newPerson = Object.assign(person, details);
  console.log(newPerson);  // { name: 'Rajesh', age: 28, city: 'Delhi' }
  ```

- **Object.freeze()**: Prevents modification of an object.

  ```javascript
  Object.freeze(person);
  person.age = 30;  // This won't work
  console.log(person.age);  // 28
  ```

- **Object.getOwnPropertyNames()**: Gets all the properties of an object.

  ```javascript
  let properties = Object.getOwnPropertyNames(person);
  console.log(properties);  // ['name', 'age']
  ```
