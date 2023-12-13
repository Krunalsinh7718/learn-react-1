import { useState } from "react";
import { useTodoContext } from "../../Context/todo-context";


function AddTodo() {
  const todo = useTodoContext();
  const [todoTask, setTodoTask] = useState('');

  const handleSubmit = () => {

  }

    return (<>
    <form action="#"  className="mx-auto mt-12 max-w-xl" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center sm:flex-row sm:justify-center">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
              type="text"
              placeholder="Enter todo hear"
              value={todoTask}
              onChange={event => setTodoTask(event.target.value)}
            />
            <button
              type="submit"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </>);
}

export default AddTodo;