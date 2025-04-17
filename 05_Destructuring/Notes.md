## **Destructuring in JavaScript**

---

**Destructuring** means **unpacking values** from arrays or properties from objects into **separate variables**.

It makes the code **clean, short, and readable**.

---

### **Array Destructuring**

```javascript
let numbers = [10, 20, 30];
let [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
```

- Assigns each array item to a variable
- Index-wise unpacking

---

### **Skipping Values**

```javascript
let [x, , z] = [1, 2, 3];
console.log(z); // 3
```

- Use `,` to skip unwanted elements

---

### **Default Values**

```javascript
let [a = 5, b = 10] = [1];
console.log(a, b); // 1 10
```

- If value is missing → use default

---

### **Object Destructuring**

```javascript
let person = { name: "Raj", age: 22 };
let { name, age } = person;

console.log(name); // Raj
```

- Property names must match
- Order doesn’t matter

---

### **Rename Variables**

```javascript
let { name: fullName } = { name: "Amit" };
console.log(fullName); // Amit
```

- You can rename while destructuring

---

### **Nested Destructuring**

```javascript
let user = { profile: { id: 101, email: "a@b.com" } };
let {
  profile: { id }
} = user;

console.log(id); // 101
```

---

### 💡 Why Use It?
- Makes code **cleaner**
- Avoids multiple `obj.key` calls
- Easy function parameter handling
