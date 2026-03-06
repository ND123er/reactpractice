import React, {useState} from 'react'
 function ToDoList(){
 const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const moveUp = (index) => {
    if (index === 0) return;

    const newTodos = [...todos];
    [newTodos[index - 1], newTodos[index]] =
      [newTodos[index], newTodos[index - 1]];

    setTodos(newTodos);
  };

  const moveDown = (index) => {
    if (index === todos.length - 1) return;

    const newTodos = [...todos];
    [newTodos[index + 1], newTodos[index]] =
      [newTodos[index], newTodos[index + 1]];

    setTodos(newTodos);
  };

  return (
    <div className="card">
      <h2>React Todo List</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTodo} class="add-button">Add</button>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {todo.text}
             <div>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">
              Delete
            </button>

            <button onClick={() => moveUp(index)} className="move-button">
              ☝
            </button>

            <button onClick={() => moveDown(index)} className="move-button">
              👇
            </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList