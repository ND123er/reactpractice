
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice";
import Cart1 from "./components/Cart1"
import Cart2 from "./components/Cart2"
import './App.css'
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        +5
      </button>
          <Cart1/>
    <Cart2/>

    </div>
  );
}

export default App;