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


export default MyComponent;


/*
====================================
📝 MyComponent – React Basics + Export
====================================

1. This is a simple **functional component** named `MyComponent`.

2. We created two variables:
   - `username` stores a string → "Pawan Maurya"
   - `age` stores a number → 29

3. Inside the return block, we used JSX (React’s templating syntax).
   - We showed dynamic values using curly braces: {username}, {age}

4. This component is exported using:
   → export default MyComponent;

5. That means, wherever you want to use this component (e.g., in App.js),
   you can simply import like this:
   → import MyComponent from './components/MyComponent';

6. This is a **default export**, so you don’t need curly braces while importing.

💡 Important Concepts:
------------------------
- JSX with variables



*/
