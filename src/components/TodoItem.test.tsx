import { render } from '@testing-library/react';
import TodoItem from './TodoItem';

test('renders without crashing', () => {
  render(<TodoItem />);
});