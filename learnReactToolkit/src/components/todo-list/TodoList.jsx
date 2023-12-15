import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../feature/todo/todoSlice";
import { useState } from "react";

function TodoList() {

    const todo = useSelector(state => state.todo);
    const dispatch = useDispatch();


    return (<>
        <ul>
            {
                todo.map(
                    todo => <li key={todo.id}>
                    <div className="flex">
    
                        {todo.task} 
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                    </div>
                </li>
                )
            }
            
        </ul>
    </>);
}

export default TodoList;