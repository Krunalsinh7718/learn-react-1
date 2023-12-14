import { useTodoContext } from "../../context/TodoContext";

function TaskList() {
  const {todo} = useTodoContext();
    return (<>
        <div className='w-full'>
            <ul>
              {
                todo.map( e => {})
              }
              <li className='border p-3'>
                <div className='flex gap-5'>
                    <input type="checkbox" name="" id="chkid" />
                  <label htmlFor="chkid" >
                    <span>Task</span>
                  </label>
                  <input type="text" />
                  <button>Save</button>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </li>
            </ul>
          </div>
    </>);
}

export default TaskList;