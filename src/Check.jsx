// useEffect => hook
// onMount, onUpdate, unMount => life-cylce methods
// componentDidMount.. =>  class components => life-cycle methods
// useState => local state managment
// API Calls => mainly used for

import { useState, useEffect } from "react";

export default function Check() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // API Calls
  useEffect(() => {
    alert("Value1 incremented!");
  }, [counter]); // empty dependency

  useEffect(() => {
    alert("Value2 incremented!");
  }, [counter2]); // empty dependency

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add One</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Add Two</button>
    </>
  );
}
