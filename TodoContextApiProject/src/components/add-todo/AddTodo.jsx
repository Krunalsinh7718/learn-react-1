import { useState } from "react";
import { useTodoContext } from "../../context/TodoContext";

function AddTodo() {
  const {addTodo} = useTodoContext();

  const [todoTask, setTodoTask] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    // console.log(todoTask);
    addTodo(todoTask);
  }

    return (  <>
        <form className='w-full' onSubmit={handleSubmit}>
            <div className='flex gap-2 mb-5 w-full'>

              <input
                class="w-full"
                type="text"
                id="task"
                placeholder="task"
                value={todoTask}
                onChange={event => setTodoTask(event.target.value)}
              />
              <button
                type="submit"
                class=" rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
               Add Task
              </button>
            </div>

          </form>
    </>);
}

export default AddTodo;