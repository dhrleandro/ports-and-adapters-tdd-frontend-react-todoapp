import TodoList, { Item } from "../../entities/TodoList";
import TodoGateway from "./TodoGateway";

export default class TodoMemoryGateway implements TodoGateway {
	private todos: TodoList;

	constructor() {
		this.todos = new TodoList([
			Item.create(undefined, 'Fazer café'),
            Item.create(undefined, 'Estudar programação'),
            Item.create(undefined, 'Almoçar'),
            Item.create(undefined, 'Estudar um pouco mais de programação'),
		]);
	}

	async getTodos(): Promise<TodoList> {
		return new TodoList(this.todos.getItems());
	}

	async addItem(item: Item): Promise<void> {
		this.todos.addItem(item);
	}

	async updateItem(item: Item): Promise<void> {
		this.todos.update(item);
	}

	async removeItem(id: string): Promise<void> {
		this.todos.delete(id);
	}

}
