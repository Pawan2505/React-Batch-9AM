## 📘 **React Import & Export (Default & Named Export)**


### 🔹 **1. Default Export: Ek File, Ek Export**

**🧾 Example:**

```js
function MyComponent() {
    let username = "Pawan Maurya";
    let age = 29;
    return (
      <div>
        <h1>Name : {username}</h1>
        <h2>Age : {age}</h2>
      </div>
    );
}

export default MyComponent; // 👈 Default export
```

**📥 Import it like this:**

```js
import MyComponent from './components/MyComponent';
```

No curly braces needed
We can change the name during import (though not recommended)

---

### 🔹 **2. Named Export: Ek se Zyada Export Possible**

**🧾 Example:**

```js
function NamedComponent() {
    return <h1>Named Component1</h1>;
}

function NamedComponent2() {
    return <h1>Named Component2</h1>;
}

export { NamedComponent, NamedComponent2 }; // 👈 Named export
```

**📥 Import it like this:**

```js
import { NamedComponent, NamedComponent2 } from './components/NamedComponent';
```

Curly braces are **must**
You **can’t change names** while importing

---

### 🔹 **Mixing Default & Named Exports in One Project**

```js
export default function Hey() {
  return <h1>Hey, How are you?</h1>;
}
```

```js
const Greet = () => {
    let name = "Pawan";
    return <h1>Hello, {name}</h1>;
};

export default Greet;
```

---

### 🔹 App.js

```js
import React from 'react';
import Hey from './components/Hello';
// import { NamedComponent, NamedComponent2 } from './components/NamedComponent';
// import MyComponent from './components/MyComponent';
// import SayHello from './components/Greet';

const App = () => {
  return (
    <div>
      {/* <MyComponent /> */}
      {/* <SayHello /> */}
      {/* <NamedComponent /> */}
      {/* <NamedComponent2 /> */}
      <Hey />
    </div>
  );
};

export default App;
```

---

###    Summary

| Type of Export | Syntax (Export)            | Syntax (Import)                      |
| -------------- | -------------------------- | ------------------------------------ |
| **Default**    | `export default Component` | `import Component from '...'`        |
| **Named**      | `export { Comp1, Comp2 }`  | `import { Comp1, Comp2 } from '...'` |

---

### Tips

* Use **default export** when your file exports only one thing.
* Use **named export** when your file has **multiple items** to export.
* Default export gives **flexibility** in import name.
* Named export ensures **strict naming** and is good for large projects.
