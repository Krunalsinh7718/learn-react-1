import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddTodo, TodoList } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  )
}

export default App
