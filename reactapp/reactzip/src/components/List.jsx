import Item from "./Item";

const List = ({ todos, removeTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <Item key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default List;