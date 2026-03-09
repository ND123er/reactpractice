import React from "react";

const Todo = () => {
  const [todos, setTodos] = React.useState([]);

  const addTodo = () => {
    // Create a new array instead of mutating state
    setTodos(prevTodos => [
      ...prevTodos,
      `New Task ${prevTodos.length + 1}` // optional: add a unique label
    ]);
  };

  return (
    <div>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li> // key added
        ))}
      </ul>
    </div>
  );
};

export default Todo;
