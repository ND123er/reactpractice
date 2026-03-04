import React, { useState } from "react";
import "./App.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="card">
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

function ToggleComponent() {
  const [show, setShow] = useState(true);

  const toggle = () => setShow(prev => !prev);

  return (
    <div className="card">
      <h2>Toggle Component</h2>
      <button onClick={toggle}>{show ? "Hide" : "Show"} Text</button>
      {show && <p>This text is toggleable!</p>}
    </div>
  );
}

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card">
      <h2>Like Button</h2>
      <button onClick={() => setLikes(prev => prev + 1)}>❤️ Like</button>
      <p>Total Likes: {likes}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>React useState Practical Examples</h1>
      <CounterApp />
      <ToggleComponent />
      <LikeButton />
    </div>
  );
}

export default App;