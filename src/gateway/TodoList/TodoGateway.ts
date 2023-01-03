import TodoList, { Item } from "../../entities/TodoList";

export default interface TodoGateway {
	getTodos(): Promise<TodoList>;
	addItem(item: Item): Promise<void>;
	updateItem(item: Item): Promise<void>;
	removeItem(id: string): Promise<void>;
}