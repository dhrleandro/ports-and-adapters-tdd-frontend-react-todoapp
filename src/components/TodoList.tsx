import TodoItem from "./TodoItem";
import styles from "../styles/TodoList.module.css";
import { Item } from "../entities/TodoList";

interface Props {
    items: Item[];
}

function TodoList(props: Props) {

    const renderItems = props.items.map(item =>
        <TodoItem key={item.id} item={item}/>
    );

    return (
        <div className={styles.TodoList}>
            {renderItems}
        </div>
    );
}

export default TodoList;