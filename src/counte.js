import React, { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count = {count}</p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increse a counter
      </button>
    </>
  );
}
