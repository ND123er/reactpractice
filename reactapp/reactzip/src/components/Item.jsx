const Item = ({ todo, removeTodo }) => {
  return (
    <li className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
      <span className="text-gray-800 dark:text-white">{todo.text}</span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </li>
  );
};

export default Item;