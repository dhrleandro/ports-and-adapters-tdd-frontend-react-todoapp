import { Item } from "../../entities/TodoList";
import TodoMemoryGateway from "./TodoMemoryGateway";

test('test all CRUD methods', async () => {
    const todo = new TodoMemoryGateway();
    const initialCount = (await todo.getTodos()).count();

    await todo.addItem(Item.create());
    await todo.addItem(Item.create());
    await todo.addItem(Item.create());
    await todo.addItem(Item.create());

    const totalCount = initialCount + 4;
    expect((await todo.getTodos()).count()).toEqual(totalCount);

    const itemIndex = initialCount + 2;
    const item = (await todo.getTodos()).getByIndex(itemIndex);
    item.description = 'new description';
    item.done = true

    await todo.updateItem(item);
    const todoItems = await todo.getTodos();
    expect(todoItems.getByIndex(itemIndex).id).toEqual(item.id);
    expect(todoItems.getByIndex(itemIndex).description).toEqual(item.description);
    expect(todoItems.getByIndex(itemIndex).done).toEqual(item.done);

    expect((await todo.getTodos()).get(item.id)).toBeDefined();

    await todo.removeItem(item.id);

    const error = await todo.getTodos();
    expect(() => {
        error.get(item.id);
    }).toThrow();

    expect((await todo.getTodos()).count()).toEqual(totalCount - 1);
});