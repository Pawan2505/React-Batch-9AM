
const Greet = () => {
    let name = "Pawan";
    return (
        <h1>Hello , {name}</h1>
    )
}

export default Greet;


/*
==========================
📝 Greet Component
==========================

1. This is a basic functional component in React — very beginner friendly.

2. Inside it, we made a variable `name` and stored "Pawan".

3. In JSX (React's HTML-like syntax), we used:
      {name}
   to display dynamic data inside the <h1> tag.

4. This component is shared with other files using:
      export default Greet;

5. That means when we import this component into another file (like App.js),
   we can use *any name* while importing it. For example:
      import SayHello from './components/Greet';

6. Then we can simply write:
      <SayHello />
   and it will run this Greet component.

So remember:
------------------
- Default export gives you flexibility in naming.
- JSX lets you inject variables easily using curly braces { }.
*/
