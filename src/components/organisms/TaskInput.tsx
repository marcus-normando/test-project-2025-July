import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import './TaskInput.css';

interface TaskInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ value, onChange, onAdd }) => (
  <div className="task-input">
    <Input value={value} onChange={onChange} placeholder="Add a new task" />
    <Button onClick={onAdd}>Add</Button>
  </div>
);

export default TaskInput; 