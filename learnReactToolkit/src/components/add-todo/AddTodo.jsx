import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../feature/todo/todoSlice";

function AddTodo() {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      
        <div className="flex gap-2">
          <input 
          type="text" 
          value={taskInput}
          onChange={ event => setTaskInput(event.target.value)}/>
          <button onClick={() => dispatch(addTodo(taskInput))}>Addtask</button>
        </div>
      
    </>
  );
}

export default AddTodo;
