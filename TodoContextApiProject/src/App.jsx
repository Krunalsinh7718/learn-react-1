import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoMain } from './components'
import { TodoContextProvider } from './Context/todo-context'


function App() {
 const [todo, setTodo] = useState([]);

 useEffect(() => {
  const todos = JSON.parse(localStorage.getItem('todos'));

  if(todos && todos.length > 0){
    setTodo(todos)
  }
 },[])

 useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todo))
 },[todo])

  return (
    <>
    <div className='min-h-screen bg-slate-700'>
      <TodoContextProvider value={{todo, setTodo}}>
        <TodoMain />
      </TodoContextProvider>
    </div>
      
    </>
  )
}

export default App
