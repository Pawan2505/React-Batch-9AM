### **Introduction to Arrays and Objects in JavaScript**

---

#### **1. Arrays in JavaScript**

- **Array** is like a list that holds multiple values.
- Each item in the array has a **position**, starting from **0**.

**Creating Arrays:**

- **Using Array Literal** (most common way):

  ```javascript
  const cities = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'];
  ```

- **Using Array Constructor** (less common):

  ```javascript
  const numbers = new Array(10, 20, 30, 40);
  ```

**Accessing and Changing Array Elements:**

- **Accessing**: Use the index (position) of the item.

  ```javascript
  console.log(cities[0]); // 'Delhi'
  ```

- **Changing**: Modify an item by using its index.

  ```javascript
  cities[2] = 'Bangalore'; // Changes 'Chennai' to 'Bangalore'
  ```

**Array Methods:**

- **Push**: Add an item at the end.

  ```javascript
  cities.push('Hyderabad');
  ```

- **Pop**: Remove the last item.

  ```javascript
  cities.pop(); // Removes 'Hyderabad'
  ```

- **Shift**: Remove the first item.

  ```javascript
  cities.shift(); // Removes 'Delhi'
  ```

- **Unshift**: Add an item at the beginning.

  ```javascript
  cities.unshift('Pune');
  ```

- **Length**: Get the number of items in the array.

  ```javascript
  console.log(cities.length); // 4
  ```

**Looping Through Arrays:**

- **For Loop**:

  ```javascript
  for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
  }
  ```

- **forEach**:

  ```javascript
  cities.forEach(function(city) {
    console.log(city);
  });
  ```

---

#### **2. Objects in JavaScript**

- **Object** is like a collection of **key-value pairs**.
- The **key** is a name (string) and the **value** can be anything (string, number, etc.).

**Creating Objects:**

- **Using Object Literal**:

  ```javascript
  const person = {
    name: 'Rajesh Kumar',
    age: 28,
    city: 'Delhi',
    occupation: 'Engineer'
  };
  ```

- **Using Object Constructor**:

  ```javascript
  const student = new Object();
  student.name = 'Amit';
  student.age = 21;
  ```

**Accessing and Changing Object Properties:**

- **Dot Notation**:

  ```javascript
  console.log(person.name); // 'Rajesh Kumar'
  person.age = 29; // Changes age to 29
  ```

- **Bracket Notation**:

  ```javascript
  console.log(person['city']); // 'Delhi'
  person['age'] = 30; // Changes age to 30
  ```

**Adding and Removing Properties:**

- **Adding**:

  ```javascript
  person.country = 'India';
  ```

- **Removing**:

  ```javascript
  delete person.occupation;
  ```

**Object Methods:**

- An object can have **functions** as properties.

  ```javascript
  const employee = {
    name: 'Ananya Patel',
    position: 'Frontend Developer',
    displayInfo: function() {
      console.log(`${this.name} is a ${this.position}`);
    }
  };

  employee.displayInfo(); // 'Ananya Patel is a Frontend Developer'
  ```

---

#### **3. Arrays vs. Objects**

| **Feature**     | **Array**                          | **Object**                           |
|-----------------|------------------------------------|--------------------------------------|
| **Structure**   | List of ordered items             | Collection of key-value pairs        |
| **Access**      | By index (0, 1, 2…)               | By key (string or symbol)           |
| **Best Use**    | Storing lists of similar items    | Storing data with different details |
| **Example**     | `const states = ['UP', 'MH']`     | `const student = { name: 'Priya' }` |

---

#### **4. Note:**

- **Arrays**:  
  Use when you need to store a list of things (like cities, names, numbers).
  
- **Objects**:  
  Use when you need to store data with different attributes (like a person’s name, age, city).

