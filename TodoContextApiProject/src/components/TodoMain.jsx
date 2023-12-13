import {AddTodo, TodoList} from "./"

function TodoMain() {
    return (<>
        <div className="py-6">
            <AddTodo />
            <TodoList />
        </div>
    </>);
}

export default TodoMain;