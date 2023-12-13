import { createContext, useContext } from "react";

const TodoContext = createContext();

const TodoContextProvider = TodoContext.Provider;

function useTodoContext(){ return useContext(TodoContext) };

export {TodoContext, TodoContextProvider, useTodoContext}