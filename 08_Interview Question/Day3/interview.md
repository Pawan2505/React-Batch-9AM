### **Q1. What is the spread operator in JavaScript?**

**Ans:**

* Spread (`...`) is used to copy all values from array/object
* Example: `let newArr = [...oldArr]`

---

### **Q2. How to merge two arrays or objects?**

**Ans:**

* Arrays: `let merged = [...arr1, ...arr2]`
* Objects: `let merged = { ...obj1, ...obj2 }`

---

### **Q3. What is destructuring in JavaScript?**

**Ans:**

* It is used to extract values from array or object
* Example (Array): `let [a, b] = [10, 20]`
* Example (Object): `let {name, age} = person`

---

### **Q4. What is the use of `key` in map function in React?**

**Ans:**

* `key` helps React to identify each item uniquely
* Used while rendering list with `.map()`
* Example: `arr.map((item, index) => <div key={index}>{item}</div>)`

---

### **Q5. What is the use of `filter()` and `reduce()`?**

**Ans:**

* `filter()` → returns only matching values

  * Example: `arr.filter(x => x > 10)`
* `reduce()` → returns single value from array

  * Example: `arr.reduce((sum, x) => sum + x, 0)`

