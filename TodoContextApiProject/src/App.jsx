import { useEffect, useState } from "react";
import "./App.css";
import { AddTodo, TaskList } from "./components";
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todoTask) => {
    if (!todoTask) return;

    setTodo((prevTodo) => [
      ...prevTodo,
      {
        id: Date.now(),
        // task : task, // strange!!! got element instead of value
        task: todoTask,
        editable: false,
        taskCompleted: false,
      },
    ]);
  };

  const updateTodo = (newTodo) => {
    setTodo((prevTodo) =>
      prevTodo.map((mapTodo) => (mapTodo.id === newTodo.id ? newTodo : mapTodo))
    );
  };

  const taskDelete = (id) => {
    setTodo((prevTodo) =>
      prevTodo.filter((filterTodo) => filterTodo.id !== id)
    );
  };

  useEffect(() => {
    const localTodo = JSON.parse(localStorage.getItem("todo"));
    setTodo(localTodo);
  },[])

  useEffect(() => {
    if(todo && todo.length > 0){
      localStorage.setItem('todo', JSON.stringify(todo))
    }
  },[todo])


  return (
    <>
      <div className="min-h-screen bg-slate-700">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-2 flex-col">
          <TodoContextProvider
            value={{ todo, addTodo, updateTodo, taskDelete }}
          >
            <AddTodo />
            <TaskList />
          </TodoContextProvider>
        </div>
      </div>
      {/* {JSON.stringify(todo)} */}
    </>
  );
}

export default App;
