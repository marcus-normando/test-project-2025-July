import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';
import type { Task } from '../../types/Task';

describe('TaskList', () => {
  const tasks: Task[] = [
    { id: '1', name: 'Task 1', completed: false },
    { id: '2', name: 'Task 2', completed: true },
  ];
  it('renders all tasks', () => {
    render(
      <TaskList
        tasks={tasks}
        onToggle={() => {}}
        onEdit={() => {}}
        onRemove={() => {}}
      />
    );
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });
}); 