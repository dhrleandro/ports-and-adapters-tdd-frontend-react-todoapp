import TodoList, { Item } from "../../entities/TodoList";

export default interface TodoGateway {
	getTodos(): Promise<TodoList>;
	addItem(item: Item): Promise<Item>;
	updateItem(item: Item): Promise<void>;
	removeItem(id: string): Promise<void>;
}