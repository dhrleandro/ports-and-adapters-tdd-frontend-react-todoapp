import React from "react";
import { Item } from "../entities/TodoList";
import TodoGateway from "../gateway/TodoList";
import TodoList from "./TodoList";
import styles from "../styles/TodoListContainer.module.css";

function TodoListContainer() {

    return (
        <div className={styles.TodoListContainer}>
            <h2>Todo App</h2>
            <TodoList />
        </div>
    );
}

export default TodoListContainer;