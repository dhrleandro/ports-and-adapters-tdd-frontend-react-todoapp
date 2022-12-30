import UniqueIdentifier from "./UniqueIdentifier";

test('teste generate unique id', () => {
    const id = UniqueIdentifier.generate();
    expect(typeof id).toBe('string');
    expect(id.length).toEqual(13);
  });