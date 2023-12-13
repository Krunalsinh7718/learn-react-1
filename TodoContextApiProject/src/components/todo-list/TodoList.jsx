import { useTodoContext } from "../../Context/todo-context";
import TodoItem from "./TodoItem";

function TodoList() {
    const {todo, setTodo} = useTodoContext();

    return ( <>
    <ul className="mt-2 mx-auto mt-12 max-w-xl">
    {todo.map(
        todo => <TodoItem key={todo.id} todo={todo} setTodo={setTodo}/>
    )}
    
        
    </ul>
    </>);
}

export default TodoList;