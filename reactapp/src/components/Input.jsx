import { useState } from "react";

const Input = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text) return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="flex-1 px-3 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default Input;