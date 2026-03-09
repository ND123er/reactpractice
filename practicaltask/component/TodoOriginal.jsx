import React, { useState } from "react";

const TodoOriginal = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    todos.push("New Task");
    setTodos(todos); 
  };

  return (
    <div className="container">
      <h2>Original Todo (Broken)</h2>
      <button onClick={addTodo}>Add Todo</button>

      {todos.length === 0 ? (
        <p className="empty-message">No todos yet. Add a task!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoOriginal;