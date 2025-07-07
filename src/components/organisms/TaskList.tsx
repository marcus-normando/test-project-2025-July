import React from 'react';
import type { Task } from '../../types/Task';
import TaskItem from '../molecules/TaskItem';
import './TaskList.css';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  onRemove: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onEdit, onRemove }) => (
  <div className="task-list">
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onToggle={onToggle}
        onEdit={onEdit}
        onRemove={onRemove}
      />
    ))}
  </div>
);

export default TaskList; 