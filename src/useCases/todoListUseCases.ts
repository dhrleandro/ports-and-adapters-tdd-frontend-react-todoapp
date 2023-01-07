import { Item } from "../entities/TodoList";
import TodoGateway from "../gateway/TodoList/TodoGateway";

async function getTodosUseCase(todoGateway: TodoGateway): Promise<Item[]> {
    const response = await todoGateway.getTodos();
    return response.getItems();
}


async function addTodoUseCase(todoGateway: TodoGateway, title: string): Promise<Item> {
    const item = Item.create(undefined, title, false);
    const response = todoGateway.addItem(item);

    return response;
}

async function toggleTodoUseCase(todoGateway: TodoGateway, id: string, done: boolean, todos: Item[]): Promise<Item> {
    const index = todos.findIndex(item => item.id === id);
    const item = todos[index].copy();
    item.done = done;
    await todoGateway.updateItem(item);

    return item;
}

export {
    getTodosUseCase,
    addTodoUseCase,
    toggleTodoUseCase
}