"use client";

import { useState } from "react";

export function TodoItem({
  todo,
}: {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
}) {
  const [completed, setCompleted] = useState(todo.completed);

  return (
    <div className="flex items-center" key={todo.id}>
      <input
        type="checkbox"
        className="mr-2"
        checked={completed}
        title="todo"
        onChange={(e) => {
          setCompleted(e.target.checked);
        }}
      />
      <p className={completed ? "line-through" : ""}>{todo.title}</p>
    </div>
  );
}
