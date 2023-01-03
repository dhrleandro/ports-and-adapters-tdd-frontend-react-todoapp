import Item from "./Item";

test('create and verify', () => {
  const item = new Item(undefined, 'Test Item');
  // expect(item.id?.length).toEqual(13);
  expect(item.description).toEqual('Test Item');
  expect(item.done).toEqual(false);
});

test('create doned', () => {
  const item = new Item(undefined, 'Test Item', true);
  expect(item.done).toEqual(true);
});

test('test static create method', () => {
  const itemA = Item.create(undefined, 'test A', true);
  expect(itemA.description).toEqual('test A');
  expect(itemA.done).toEqual(true);

  const itemB = Item.create();
  expect(itemB.description).toEqual('');
  expect(itemB.done).toEqual(false);
});