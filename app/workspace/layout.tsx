export default function Layout(props: {
  children: React.ReactNode;
  todos: React.ReactNode;
  notes: React.ReactNode;
}) {
  return (
    <div>
      {props.children}
      <div className="flex justify-around">
        {props.todos}
        {props.notes}
      </div>
    </div>
  );
}
