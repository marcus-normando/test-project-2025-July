import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoPage from './TodoPage';

describe('TodoPage', () => {
  it('renders the title', () => {
    render(<TodoPage />);
    expect(screen.getByText(/Atomic Design To-Do List/i)).toBeInTheDocument();
  });
  it('can add a new task', () => {
    render(<TodoPage />);
    const input = screen.getByPlaceholderText('Add a new task');
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });
}); 