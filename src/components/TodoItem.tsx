import React from "react";
import { Item } from "../entities/TodoList";
import styles from "../styles/TodoList.module.css";

interface Props {
    item: Item;
    onToggle?: (id: string, done: boolean) => void
}

function TodoItem(props: Props) {

    const [done, setDone] = React.useState(props.item.done);
    const labelId = `TodoItem.${props.item.id}`;

    return (
        <div className={styles.TodoItem}>
            <input
                id={labelId}
                type="checkbox"
                checked={done}
                onChange={event => { 
                    setDone(event.target.checked);
                    if (props.onToggle)
                        props.onToggle(props.item.id, event.target.checked); 
                }}
            />
            <label
                htmlFor={labelId}
                className={done ? styles.done : ''}
            >
                {props.item.description}
            </label>
            <button>Delete</button>
        </div>
    );
}

export default TodoItem;