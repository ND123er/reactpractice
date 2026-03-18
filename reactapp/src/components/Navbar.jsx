import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-xl font-bold text-blue-600">MyApp</h1>

      <div className="space-x-4">
        <Link className="hover:text-blue-500" to="/">Home</Link>
        <Link className="hover:text-blue-500" to="/about">About</Link>
        <Link className="hover:text-blue-500" to="/contact">Contact</Link>
      </div>

      <button
        onClick={toggleTheme}
        className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 cursor-pointer"
      >
        Toggle
      </button>
    </nav>
  );
};

export default Navbar;