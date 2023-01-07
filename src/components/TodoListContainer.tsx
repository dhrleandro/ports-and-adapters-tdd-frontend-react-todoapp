import React from "react";
import { Item } from "../entities/TodoList";
import TodoList from "./TodoList";
import styles from "../styles/TodoList.module.css";
import { useDispatch, useTrackedState } from "../store/store";

function TodoListContainer() {

    const dispatch = useDispatch();
    const state = useTrackedState();
    
    React.useEffect(() => {
        console.log('init todos');
        dispatch({ type: 'LOAD_TODOS' });
    }, []);

    const addTodo = () => {
        dispatch({ type: 'ADD_TODO', title: 'Teste' });
    }

    return (
        <div className={styles.TodoListContainer}>
            <h2>Todo App</h2>
            <div className={styles.InputContainer}>
                <input type="text" />
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList items={state.todos}/>
        </div>
    );
}

export default React.memo(TodoListContainer);