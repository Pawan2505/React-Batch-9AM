
function NamedComponent() {
    return (
        <h1>Named Component1</h1>
    )
}


function NamedComponent2() {
    return <h1>Named Component2</h1>;
}


export { NamedComponent, NamedComponent2 };



/*
=======================================
📝 Named Components – Named Exports
=======================================

1. We have two simple functional components:
   - `NamedComponent` that displays "Named Component1"
   - `NamedComponent2` that displays "Named Component2"

2. Instead of using `default export`, we used **named exports**:
   → `export { NamedComponent, NamedComponent2 };`

3. Named exports are useful when you want to export multiple components or variables from a single file.

4. When importing named exports in another file, like in App.js, you must use curly braces:
   → `import { NamedComponent, NamedComponent2 } from './components/NamedComponents';`

   **Note:** The names must match exactly with what is exported. So, `NamedComponent` and `NamedComponent2` should be used as they are.

💡 Key Concepts:
-------------------
- Named Exports (for multiple exports)
- Importing with curly braces in the importing file


*/
