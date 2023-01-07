import React from "react";
import { Item } from "../entities/TodoList";
import TodoGateway from "../gateway/TodoList";
import { useDispatch } from "../store/store";
import * as actions from '../store/actions';
import { addTodoUseCase, getTodosUseCase, toggleTodoUseCase } from "../useCases/todoListUseCases";

function useTodoListGateway() {
    const gateway = React.useRef<TodoGateway>(new TodoGateway());
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (!gateway.current)
            gateway.current = new TodoGateway();

    }, [gateway]);

    const fetchTodos = async () => {
        const response = await getTodosUseCase(gateway.current);
        dispatch(actions.actionSetTodos(response));
    }

    const addTodo = async (title: string) => {
        const response = await addTodoUseCase(gateway.current, title);

        if (response)
            dispatch(actions.actionAddTodo(response));
    }

    const toggleTodo = async (id: string, done: boolean, todos: Item[]) => {
        const response = await toggleTodoUseCase(gateway.current, id, done, todos);

        if (response)
            dispatch(actions.actionUpdateTodo(response));
    }

    return {
        fetchTodos,
        addTodo,
        toggleTodo
    }
}

export default useTodoListGateway;