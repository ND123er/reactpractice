import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { createContext } from 'react';
import Page from './components/page';
import './App.css'
export const ThemeContext = createContext({
  theme:'light',
  setTheme: ()=>{}
});
function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <>
         <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />
    </ThemeContext.Provider>



    </>
  )
}

export default App
