import { render } from '@testing-library/react';
import { Item } from '../entities/TodoList';
import TodoItem from './TodoItem';

test('renders without crashing', () => {
  render(<TodoItem item={Item.create(undefined, 'This is a Task', false)}/>);
});