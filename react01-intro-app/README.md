## 🧱 **How to Build a React App – Step by Step**

### 📍 **Install Node.js**

* Go to [https://nodejs.org](https://nodejs.org)
* Download and install the latest LTS version.
* After installing, check:

  ```bash
  node -v
  npm -v
  ```

---

### 📍 **Create a New React App**

* Open terminal / command prompt and run:

  ```bash
  npx create-react-app my-app
  ```
* `my-app` is the project name. You can change it as per your choice.

---

### 📍 **Go to Project Folder**

```bash
cd my-app
```

---

### 📍 **Start the Development Server**

```bash
npm start
```

* It will open a browser at `http://localhost:3000/` with the default React page.

---

### 📍 **Understand Folder Structure**

Some important folders and files:

* `public/` – Static files (like index.html)
* `src/` – All your React code (JSX, CSS)
* `App.js` – Main component
* `index.js` – Entry point of the app

---

### 📍 **Clean Default Code (Optional but Recommended)**

* Remove unnecessary code from `App.js`, `App.css`, etc.
* Make it clean for your custom app.

---

### 📍 **Start Writing Components**

* Create your own components inside `src/` folder.
* Example:

  ```jsx
  function Welcome() {
    return <h2>Welcome to My React App</h2>;
  }
  ```

---

### 📍 **Use Components in App.js**

* Import and use like this:

  ```jsx
  import Welcome from './Welcome';
  function App() {
    return <Welcome />;
  }
  ```

---

### 📍 **Add Styling (CSS)**

* Use `App.css` or create your own CSS files.
* Import them in the component.

---

