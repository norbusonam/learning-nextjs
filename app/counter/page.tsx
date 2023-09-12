"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button className="hover:underline" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="hover:underline" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}
