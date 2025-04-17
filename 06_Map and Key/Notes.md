## 📘 Topic: `Map` and `Key` in JavaScript

---

### 🔶 What is a Map?

A `Map` is a special object in JavaScript used to store **key-value pairs** — just like objects, but more powerful and flexible.

---

### 💡 Syntax:
```javascript
const myMap = new Map();
```

---

### 🔹 Add values using `.set()`
```javascript
const student = new Map();

student.set('name', 'Rahul');
student.set('age', 21);
student.set('course', 'BCA');

console.log(student);
```

✔ You just created a `Map` with 3 key-value pairs.

---

### 🔹 Get values using `.get()`
```javascript
console.log(student.get('name'));    // Rahul
console.log(student.get('course'));  // BCA
```

✔ Use `.get(key)` to get the value.

---

### 🔹 Check if a key exists
```javascript
console.log(student.has('age'));   // true
console.log(student.has('marks')); // false
```

✔ `.has(key)` tells you whether a key exists.

---

### 🔹 Delete a key
```javascript
student.delete('age');
console.log(student);
```

✔ Removes the 'age' key.

---

### 🔹 Find number of entries
```javascript
console.log(student.size);  // 2
```

✔ `.size` gives total entries in the map.

---

### 🔹 Clear all entries
```javascript
student.clear();
console.log(student.size); // 0
```

✔ `.clear()` removes everything.

---

## 🧠 Difference Between Object vs Map

| Feature              | Object             | Map                       |
|----------------------|--------------------|---------------------------|
| Key Types            | Only strings/symbols | Any type (string, object, number, etc.) |
| Order of keys        | Not guaranteed     | Maintains order           |
| Easy to iterate?     | Less               | Yes, very easy            |
| Direct methods?      | Limited            | Many helpful ones         |

---

### 🔹 Use object as a key
```javascript
const userInfo = new Map();
const user = { id: 1 };

userInfo.set(user, 'Admin');
console.log(userInfo.get(user));  // Admin
```

✔ You can't use objects as keys in plain objects, but Map allows it.

---

### 🔹 Loop through a Map
```javascript
const food = new Map();
food.set('fruit', 'apple');
food.set('drink', 'milk');

for (let [key, value] of food) {
  console.log(key + " → " + value);
}
```

✔ `Map` is iterable with `for...of`.

---

### 🔹 Convert Object to Map
```javascript
const obj = { a: 1, b: 2 };
const objMap = new Map(Object.entries(obj));

console.log(objMap);  // Map(2) {'a' => 1, 'b' => 2}
```

---

### 🔹 Convert Map to Object
```javascript
const newMap = new Map([['x', 10], ['y', 20]]);
const objAgain = Object.fromEntries(newMap);

console.log(objAgain);  // { x: 10, y: 20 }
```

---

### 💭 Real-Life Analogy:

Think of a `Map` like a locker system:
- Every locker (key) has a unique number.
- Inside each locker, there’s something stored (value).
- You can check, delete, or find what’s inside, easily.

---

## Note:

A **Map** is like a smart object that:
- Accepts any type of key
- Remembers the order
- Is easy to loop and manage
