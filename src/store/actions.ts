import { Item } from "../entities/TodoList";

export type Action =
    | { type: 'SET_TODOS'; todos: Item[] }
    | { type: 'ADD_TODO'; item: Item }
    | { type: 'UPDATE_TODO'; item: Item };

export function actionSetTodos(todos: Item[]): Action {
    return { type: 'SET_TODOS', todos };
}

export function actionAddTodo(item: Item): Action {
    return { type: 'ADD_TODO', item };
}

export function actionUpdateTodo(item: Item): Action {
    return { type: 'UPDATE_TODO', item };
}