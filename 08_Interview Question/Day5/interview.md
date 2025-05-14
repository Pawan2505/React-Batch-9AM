### **Q1. What are props in React?**

**Answer:**

* Props means **properties**.
* We use props to **send data from one component to another** (usually parent to child).
* Props are **read-only** – we **can’t change** them in the child.
* Just like how we send arguments to a function.

**Example:**

```js
<User name="Pranjal" />
```

---

### **Q2. How to pass and use props?**

**Answer:**

* We **pass props** in the parent component like this:

  ```js
  <Student name="Anjali" />
  ```
* We **use props** in the child component like this:

  ```js
  const Student = (props) => {
    return <h2>Hello {props.name}</h2>;
  };
  ```

---

### **Q3. Can we change props in a component?**

**Answer:**

* No, we **should not change** props.
* Props are **fixed (read-only)** inside the component.
* If you want to change something, use **state**, not props.

