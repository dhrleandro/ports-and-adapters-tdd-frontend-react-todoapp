import { render } from '@testing-library/react';
import TodoListContainer from './TodoListContainer';

test('renders without crashing', () => {
  render(<TodoListContainer />);
});