import { useId, useRef, useState } from "react";
import { useTodoContext } from "../../context/TodoContext";

function TodoItem(props) {
  const { updateTodo, taskDelete } = useTodoContext();

  const { id, task, editable, taskCompleted } = props.todo;

  const chkId = useId();

  const inputRef = useRef();

  const [taskInputVal, setTaskInputVal] = useState(task);
  const [todoEditable, setTodoEditable] = useState(editable);

  const handleTaskCompleted = (taskDone) => {
    updateTodo({ ...props.todo, taskCompleted: taskDone });
  };

  const handleUpdateTodo = () => {
    updateTodo({ ...props.todo, task: taskInputVal });
    setTodoEditable(false);
  };

  return (
    <>
      <li className={`border p-3 mb-2 rounded-md  ${taskCompleted ? "bg-emerald-700" : 'bg-cyan-950'}`}>
        <div className="flex justify-between items-center gap-5">
          <div className="flex gap-4 items-center">
            <input
              style={{height: 20, width: 20}}
              type="checkbox"
              id={chkId}
              checked={taskCompleted}
              onChange={(chkEvent) =>
                handleTaskCompleted(chkEvent.target.checked)
              }
            />

            {todoEditable ? (
              <input
                className="bg-transparent text-white border-0 shadow-transparent"
                type="text"
                ref={inputRef}
                value={taskInputVal}
                onChange={(event) => setTaskInputVal(event.target.value)}
              />
            ) : (
              <label htmlFor={chkId} className={`text-white ${taskCompleted ? 'strike-text' : ''}`}>
                <span>{task}</span>
              </label>
            )}
          </div>

          <div className="flex gap-2">
            <button
              className={`h-10 w-10 rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${taskCompleted ? 'disabled:opacity-25' : ''}`}
              disabled={taskCompleted}
              title={todoEditable ? "Save" : "Edit"}
              onClick={() => {
                if (taskCompleted) return;

                todoEditable
                  ? handleUpdateTodo()
                  : (async () => {
                        await setTodoEditable(true);
                        inputRef.current.focus();
                    })()
              }}
            >
              {todoEditable ? (
                <svg fill="#fff" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 19V13H17V19H19V7.82843L16.1716 5H5V19H7ZM4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM9 15V19H15V15H9Z"></path></svg>
              ) : (
                <svg fill="#fff" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path></svg>
              )}
            </button>
            <button title="Delete" className="h-10 w-10 rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" onClick={() => taskDelete(id)}>
                <svg fill="#fff" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>
            </button>
          </div>
        </div>
      </li>
    </>
  );
}

export default TodoItem;
