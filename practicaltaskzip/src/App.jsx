import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoApp from '../component/TodoApp'
import TodoOriginal from '../component/TodoOriginal'
import TodoFixed from '../component/TodoFixed'
import Todo from '../component/Todo'
import './App.css'

function App() {


  return (
    <>
     <TodoApp/>
     <Todo/>
    </>
  )
}

export default App
