import React from "react";
import { Item } from "../entities/TodoList";
import TodoList from "./TodoList";
import styles from "../styles/TodoList.module.css";

function TodoListContainer() {

    const items = [
        Item.create(undefined, 'Fazer café'),
        Item.create(undefined, 'Estudar programação'),
        Item.create(undefined, 'Almoçar'),
        Item.create(undefined, 'Estudar um pouco mais de programação'),
    ];
    
    return (
        <div className={styles.TodoListContainer}>
            <h2>Todo App</h2>
            <div className={styles.InputContainer}>
                <input type="text" />
                <button>Add</button>
            </div>
            <TodoList items={items}/>
        </div>
    );
}

export default TodoListContainer;