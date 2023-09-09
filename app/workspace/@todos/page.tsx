import { TodoItem } from "./todo";
import { TODOS } from "./todo-data";

export default async function Page() {
  // simulate loading todos
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <p>Todos</p>
      {TODOS.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
