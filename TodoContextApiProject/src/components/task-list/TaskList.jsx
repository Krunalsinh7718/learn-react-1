import { useTodoContext } from "../../context/TodoContext";
import TodoItem from "./TodoItem";

function TaskList() {
  const {todo} = useTodoContext();
  // console.log("task list", todo );
    return (<>
        <div className='w-full border-t border-white/10 pt-5'>
            <ul>
              {
                todo.map( mapTodo => 
                  (<TodoItem key={mapTodo.id} todo={mapTodo}/>)
                )
              }
            </ul>
          </div>
    </>);
}

export default TaskList;