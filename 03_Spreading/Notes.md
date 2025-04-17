## 🔹 Spreading in JavaScript (`...` Spread Operator)

### 🔸 What is it?
The spread operator (`...`) is used to **expand** elements of an **array or object**.

Think of it like **"unpacking"** values from arrays/objects.

---

### 🔸 Use Cases of Spread

#### 1. Copying Arrays
```js
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);  // [1, 2, 3]
```

#### 2. Merging Arrays
```js
let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];
console.log(c);  // [1, 2, 3, 4]
```

#### 3. Spreading in Function Calls
```js
function add(a, b, c) {
  return a + b + c;
}
let nums = [10, 20, 30];
console.log(add(...nums));  // 60
```

#### 4. Copying Objects
```js
let obj1 = { name: 'Amit' };
let obj2 = { ...obj1 };
console.log(obj2);  // { name: 'Amit' }
```

#### 5. Merging Objects
```js
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged = { ...obj1, ...obj2 };
console.log(merged);  // { a: 1, b: 2 }
```

---

### 🔸 Note:
- Useful in **React** for updating state immutably.

