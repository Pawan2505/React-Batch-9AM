## 🔸 **Merging in JavaScript**  

### 🔹 What is Merging?  
Merging means **combining** two or more arrays or objects into one. It's mostly done using the **spread operator (`...`)** or some built-in methods.

---

### **Merging Arrays**  
You can combine arrays using:

```js
let a = [1, 2];
let b = [3, 4];
let result = [...a, ...b];
console.log(result); // [1, 2, 3, 4]
```

📝 *Note:* You can also add extra items during merge:

```js
let merged = [0, ...a, ...b, 5];
```

---

### **Merging Objects**  
To merge two or more objects:

```js
let obj1 = { name: 'Ravi' };
let obj2 = { age: 22 };
let final = { ...obj1, ...obj2 };
console.log(final); // { name: 'Ravi', age: 22 }
```

📝 *If both objects have same keys, the later one overrides the earlier one.*

```js
let a = { x: 1 };
let b = { x: 5, y: 10 };
let merged = { ...a, ...b }; // x will be 5
```

---

### Other Methods  
You can also merge arrays using `.concat()`:

```js
let result = a.concat(b);
```

---

### ✍️ Note:  
- `...` (Spread operator) is the most common way to merge  
- Arrays keep order while merging  
- In objects, **same keys get overwritten**  
- `concat()` also works for arrays (not for objects)  
