import { TodoItem } from "./todo";
import { TODOS } from "./todo-data";

export default function Page() {
  return (
    <div>
      <p>Todos</p>
      {TODOS.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
