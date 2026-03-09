import React, { useState } from "react";

const TodoFixed = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(), // unique ID
      text: `New Task ${todos.length + 1}`
    };
    setTodos(prevTodos => [...prevTodos, newTodo]); // ✅ no mutation
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container">
      <h2>Fixed Todo</h2>
      <button onClick={addTodo}>Add Todo</button>

      {todos.length === 0 ? (
        <p className="empty-message">No todos yet. Add a task!</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoFixed;