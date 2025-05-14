### **Props in React**

Props are **properties** passed from the **parent** component to a **child** component. They allow data to flow from one component to another.

---

### **1. What Are Props?**

* **Props** are like **attributes** or **input values** that we send to components.
* They help pass **data from the parent to child components**.
* Props are **read-only**, which means we can't modify them in the child component.
* Think of props like **arguments to a function**.

> Example: If you want to pass your **name** and **age** to a component, you do it like this:

```js
<Greet username="Pawan Maurya" age="29" />
```

In this example:

* `username="Pawan Maurya"` → This is a prop called **username**.
* `age="29"` → This is a prop called **age**.

---

### **2. Passing and Using Props in Components**

To use props in a component, we need to **pass them from the parent** and **use them in the child**.

#### **Parent Component Example:**

```js
const App = () => {
  let username = "Pawan Maurya";
  let age = 29;

  return <Greet username={username} age={age} />;
};
```

#### **Child Component Example:**

```js
const Greet = (props) => {
  return <h1>Hello, {props.username}. You are {props.age} years old.</h1>;
};
```

---

### **3. Using Destructuring in Props**

Instead of accessing props like `props.username` and `props.age`, we can **destructure** them to make the code cleaner and easier to read.

```js
const Greet = ({ username, age }) => {
  return <h1>Hello, {username}. You are {age} years old.</h1>;
};
```

This way, we don’t need to use `props.username` and `props.age`; we can just use `username` and `age` directly.

---

### **4. Passing an Array as Props**

You can also **pass arrays** as props to components.

#### **Parent Component:**

```js
const App = () => {
  const fruits = ["Apple", "Banana", "Orange"];

  return <ArrayProps fruits={fruits} />;
};
```

#### **Child Component:**

```js
const ArrayProps = ({ fruits }) => {
  return (
    <div>
      <h1>Fruits List</h1>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </div>
  );
};
```

---

### **5. Note:**

* Props are a way to pass **dynamic data** to your components.
* They help components **stay flexible** and reusable.
* Props are **read-only**; if you need to update data, use **state**.

### **Watch the video to learn more about Props and State**:

For a detailed explanation and more examples, check out this video:

[Props and State in React](https://drive.google.com/file/d/1MAaZhCEubcZEHFB2-LOUdgIsifvxW3-M/view?usp=sharing)

