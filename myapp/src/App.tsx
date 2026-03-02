import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './component/calculator'

function App():any {
  const [heading, setHeading] = useState<string>("");

  const handleHeading = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeading(e.target.value);
  };

return (
    <>
      <Calculator  heading={heading}/>
          <h3 className="text-2xl font-semibold">Change heading</h3>
    <input
          type="text"
          className="w-full border border-black/20 mt-5 text-center mt-2.5"
          value={heading}
          onChange={handleHeading}
        />

    </>
  );
}


export default App
