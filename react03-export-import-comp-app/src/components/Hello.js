
export default function Hey() {
    return (
        <h1>Hey, How are you?</h1>
    )
}



/*
==================================
📝 Hey Component (Default Export)
==================================

1. This is a simple functional component in React.

2. We are directly using `export default` with the function:
      export default function Hey() { ... }

3. This means — we don’t need to write:
      const Hey = () => { ... }
      export default Hey;

   It’s all combined in one line. Clean and short.

4. Inside the return, we are showing a <h1> with a friendly message:
      "Hey, How are you?"

5. Since it's a default export

    import Hey from './components/Hello'
*/
