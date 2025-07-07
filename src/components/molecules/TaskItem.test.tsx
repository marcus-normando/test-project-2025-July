import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';
import type { Task } from '../../types/Task';

describe('TaskItem', () => {
  const task: Task = { id: '1', name: 'Test Task', completed: false };
  it('renders task name and buttons', () => {
    render(
      <TaskItem
        task={task}
        onToggle={() => {}}
        onEdit={() => {}}
        onRemove={() => {}}
      />
    );
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });
  it('calls onToggle when checkbox is clicked', () => {
    const onToggle = jest.fn();
    render(
      <TaskItem
        task={task}
        onToggle={onToggle}
        onEdit={() => {}}
        onRemove={() => {}}
      />
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onToggle).toHaveBeenCalledWith('1');
  });
}); 