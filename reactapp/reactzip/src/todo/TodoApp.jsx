import { useState } from "react";
import Input from "../components/Input";
import List from "../components/List";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo App</h2>
      <Input addTodo={addTodo} />
      <List todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoApp;