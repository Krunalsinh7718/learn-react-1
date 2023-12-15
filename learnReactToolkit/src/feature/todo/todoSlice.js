import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {todo : [{
    id : 123,
    task : "loream ipsum",
    editable : false
}]}

const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id: nanoid(),
                task: action.payload,
                editable : false
            }
            state.todo.push(todo);
        },
        removeTodo : (state, action) => {
            state.todo = state.todo.filter( todo => todo.id !== action.payload)
        },
        updateTodo : (state, action) => {
            state.todo = state.todo.map(
                todo => {
                    if(todo.id === action.payload.id){
                        return {...todo, task: action.payload.task }
                    }
                }
            )
        }

    }

})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;