import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddTodo, TaskList } from './components'
import { TodoContextProvider } from './context/TodoContext'


function App() {

  const [todo, setTodo] = useState([]);

  const addTodo = (todoTask) => {

    if(!todoTask) return;

    setTodo( prevTodo => [...prevTodo, {
      id: Date.now(),
      // task : task, // strange!!! got whole element instead of value
      task : todoTask,
      editable: false,
      taskCompleted: false
    }])

  }

  useEffect(() => console.log(todo),[todo])

  const updateTodoTask = (id, task) =>{
    setTodo( prevTodo => prevTodo.map(
      mapTodo => mapTodo.id === id ? {...mapTodo, task} : mapTodo
    ))
  }

  const updateTaskDone = (id, taskCompleted) => {
    setTodo( prevTodo => prevTodo.map(
      mapTodo => mapTodo.id === id ? {...mapTodo, taskCompleted: taskCompleted} : mapTodo
    ))
  }

  const taskDelete = (id) => {
    setTodo( prevTodo => prevTodo.filter(
      filterTodo => filterTodo.id !== id
    ))
  }

  return (
    <>
      <div className='min-h-screen bg-slate-700'>
        <div className='mx-auto flex max-w-4xl items-center justify-between px-4 py-2 flex-col'>
          <TodoContextProvider value={{todo, addTodo, updateTodoTask, updateTaskDone, taskDelete}}>
            <AddTodo />
            <TaskList />
          </TodoContextProvider>
        </div>

      </div>
      {/* {JSON.stringify(todo)} */}
    </>
  )
}

export default App
