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