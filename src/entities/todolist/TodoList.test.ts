import Item from "./Item";
import TodoList from "./TodoList";

test('basic methods', () => {
  const todoList = new TodoList();
  todoList.add('aaaa');
  todoList.add('bbbb');
  todoList.add('cccc');
  todoList.add('dddd eeee ffff gggg');

  const newItem = Item.create(undefined, 'New Item ABCD', true);
  todoList.addItem(newItem);

  expect(todoList.count()).toBe(5);
  expect(todoList.findIndex(newItem.id)).toBe(4);
  expect(todoList.getByIndex(4).id).toBe(newItem.id);
});

test('add two items into TodoList', () => {
  const todoList = new TodoList();
  todoList.add('aaaa');
  todoList.add('bbbb');
  expect(todoList.count()).toBe(2);
});

test('update a item in TodoList', () => {
  const todoList = new TodoList();
  todoList.add('aaaa');
  todoList.add('bbbb');

  const item = todoList.getByIndex(1)
  // expect(item).toBeDefined();
  expect(item.description).toEqual('bbbb');
  
  const oldItem = todoList.get(item.id);
  // expect(oldItem).toBeDefined();
  expect(oldItem.id).toEqual(item.id);
  expect(oldItem.description).toEqual(item.description);
  expect(oldItem.done).toEqual(item.done);

  const newItem = new Item(oldItem.id, oldItem.description + 'v2', oldItem.done);
  todoList.update(newItem)

  expect(todoList.get(newItem.id).description).toEqual('bbbbv2');
});