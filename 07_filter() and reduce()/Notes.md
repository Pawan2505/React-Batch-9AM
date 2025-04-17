## 📘 JavaScript `filter()` and `reduce()`  

---

### 🟡 `filter()` → Pick Only What You Need

#### 🤔 What is `filter()`?

It helps you **pick specific items** from an array based on a **condition**.

> Example: From a basket of fruits, pick only the **mangoes** 🍋  
> That’s what `filter()` does!

---

### 🔹 Basic Syntax:
```js
array.filter((item) => condition);
```

---

### Even Numbers
```js
let numbers = [1, 2, 3, 4, 5, 6];

let even = numbers.filter(num => num % 2 === 0);

console.log(even); // [2, 4, 6]
```

---

### Filter Fruits
```js
let fruits = ['apple', 'banana', 'mango', 'orange'];

let mangoOnly = fruits.filter(fruit => fruit === 'mango');

console.log(mangoOnly); // ['mango']
```

---

### Numbers > 10
```js
let nums = [5, 12, 8, 20];

let bigNums = nums.filter(num => num > 10);

console.log(bigNums); // [12, 20]
```

---

### `filter()` Note:
- Gives a **new array**
- Keeps items that **pass the condition**
- Original array stays **untouched**

---

---

### 🟢 `reduce()` → Combine Everything into One

#### 🤔 What is `reduce()`?

It’s like a mixer grinder — it **combines all array items into a single value**.

---

### 🔹 Basic Syntax:
```js
array.reduce((total, current) => doSomething, initialValue);
```

---

### Add All Numbers
```js
let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // 10
```

---

### Multiply All Numbers
```js
let nums = [2, 3, 4];

let product = nums.reduce((total, num) => total * num, 1);

console.log(product); // 24
```

---

### Join Words
```js
let words = ['I', 'love', 'JS'];

let sentence = words.reduce((all, word) => all + ' ' + word);

console.log(sentence); // "I love JS"
```

---

### `reduce()` Note:
- Gives **one final value**
- Good for: total, product, string join, counters, etc.
- Runs from **left to right**
