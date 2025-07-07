import React from 'react';
import type { Task } from '../../types/Task';
import Checkbox from '../atoms/Checkbox';
import Button from '../atoms/Button';
import './TaskItem.css';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  onRemove: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onEdit, onRemove }) => (
  <div className="task-item">
    <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
    <span className={task.completed ? 'completed' : ''}>{task.name}</span>
    <Button onClick={() => onEdit(task.id)}>Edit</Button>
    <Button onClick={() => onRemove(task.id)}>Remove</Button>
  </div>
);

export default TaskItem; 