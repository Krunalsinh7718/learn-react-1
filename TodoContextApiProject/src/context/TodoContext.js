import { createContext, useContext } from "react"

const TodoContext = createContext({todo : [
    {
        id: 1,
        task : "Task 1",
        editable: false,
        taskCompleted: false
    }
],
addTodo : () => {},
updateTodo : () => {},
deleteTodo : () => {},
setTodoEditable : () => {}});

const TodoContextProvider = TodoContext.Provider;

const useTodoContext = () => useContext(TodoContext)

export {TodoContext, TodoContextProvider, useTodoContext}