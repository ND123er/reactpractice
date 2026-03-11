import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './about'
import Services from './Services'
import Contact from './Contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    
  )
}

export default App
