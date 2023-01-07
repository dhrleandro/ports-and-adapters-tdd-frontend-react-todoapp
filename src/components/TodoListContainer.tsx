import React from "react";
import { Item } from "../entities/TodoList";
import TodoList from "./TodoList";
import styles from "../styles/TodoList.module.css";
import { useDispatch, useTrackedState } from "../store/store";
import useTodoListGateway from "../hooks/useTodoListGateway";

function TodoListContainer() {

    const dispatch = useDispatch();
    const state = useTrackedState();
    const gateway = useTodoListGateway();
    
    React.useEffect(() => {
        gateway.fetchTodos();
    }, []);

    const addTodo = () => {
        gateway.addTodo('teste haha');
    }

    const doneTodo = (id: string, done: boolean) => {
        gateway.toggleTodo(id, done, [...state.todos]);
    }

    return (
        <div className={styles.TodoListContainer}>
            <h2>Todo App</h2>
            <div className={styles.InputContainer}>
                <input type="text" />
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList items={state.todos} onToggle={doneTodo}/>
        </div>
    );
}

export default React.memo(TodoListContainer);