import { useState } from 'react'
import '../App.css'
interface CalculatorProps {
  heading: string;
}
export default function Calculator({ heading}: CalculatorProps):any{
  const [input, setInput] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^-?\d*$/.test(value)) {
      setInput(value);
    }
  };

  const handleAdd = () => {
    setCount((prev) => prev + Number(input || 0));
  };

  const handleSubtract = () => {
    setCount((prev) => prev - Number(input || 0));
  };
      return (
    <>
      <h1>{heading || "Calculator"}</h1>
      <div className="max-w-60 p-5 mt-7.5 text-xl font-bold text-emerald-500">
      <h3>Output: <span>{count}</span></h3>
        <input
          type="text"
          className="w-full border border-black/20 mt-5 text-center"
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleAdd} className="min-w-11.25 mt-3.5 mr-4 border-amber-600! bg-black! hover:bg-transparent! hover:text-black py-2! px-3.5! text-white">+</button>
        <button onClick={handleSubtract} className="min-w-11.25 mt-3.5 border-amber-600! bg-black! hover:bg-transparent! hover:text-black py-2! px-3.5! text-white">-</button>
      </div>
    </>
  );
}