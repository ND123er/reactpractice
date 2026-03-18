import TodoApp from "../todo/TodoApp";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Todo App
        </h1>
        <TodoApp />
      </div>
    </div>
  );
};

export default Home;