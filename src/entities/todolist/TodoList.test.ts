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

test('delete item from TodoList', () => {
  const todoList = new TodoList();
  const items = [];

  todoList.add('aaaa');
  todoList.add('bbbb');
  const deleteId = todoList.add('cccc').id;
  todoList.add('dddd');
  todoList.add('eeee');

  expect(todoList.getByIndex(0).description).toBe('aaaa');
  expect(todoList.getByIndex(1).description).toBe('bbbb');
  expect(todoList.getByIndex(2).description).toBe('cccc');
  expect(todoList.getByIndex(3).description).toBe('dddd');
  expect(todoList.getByIndex(4).description).toBe('eeee');

  todoList.delete(deleteId);

  expect(todoList.getByIndex(0).description).toBe('aaaa');
  expect(todoList.getByIndex(1).description).toBe('bbbb');
  expect(todoList.getByIndex(2).description).toBe('dddd');
  expect(todoList.getByIndex(3).description).toBe('eeee');
});

test('verify if getItems() return a copy of this.items from TodoList object, not a reference', () => {
  const todoList = new TodoList();
  todoList.add('aaaa');
  todoList.add('bbbb');
  expect(todoList.count()).toBe(2);

  const items = todoList.getItems();
  expect(items.length).toBe(2);
  expect(items[0].description).toEqual('aaaa');
  expect(items[1].description).toEqual('bbbb');

  items.splice(1, 1);
  expect(items[0].description).toEqual('aaaa');
  expect(items[1]).toBeUndefined();

  expect(todoList.getByIndex(0).description).toEqual('aaaa');
  expect(todoList.getByIndex(1).description).toEqual('bbbb');
});

test('create TodoList using items from another TodoList and ensure there is no link between them', () => {
  const todoList = new TodoList();
  todoList.add('aaaa');
  todoList.add('bbbb');
  expect(todoList.count()).toBe(2);

  const todoListB = new TodoList(todoList.getItems());
  expect(todoListB.count()).toBe(2);

  todoListB.add('cccc');
  todoListB.add('dddd');

  expect(todoList.count()).toBe(2);
  expect(todoListB.count()).toBe(4);
});

test('done items and count total pending', () => {
  const todoList = new TodoList();
  todoList.add('aaaa');
  const done1 = todoList.add('bbbb');
  todoList.add('dddd');
  const done2 = todoList.add('eeee');

  todoList.done(done1.id);
  todoList.done(done2.id);

  expect(todoList.totalPending()).toEqual(2);
});