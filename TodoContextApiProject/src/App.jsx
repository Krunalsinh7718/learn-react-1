import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoMain } from './components'
import { TodoContextProvider } from './Context/todo-context'


function App() {
 const [todo, setTodo] = useState([]);
  return (
    <>
      <TodoContextProvider value={{todo, setTodo}}>
        <TodoMain />
      </TodoContextProvider>
    </>
  )
}

export default App
