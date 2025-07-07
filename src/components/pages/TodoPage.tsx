import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { Task } from '../../types/Task';
import MainTemplate from '../templates/MainTemplate';
import TaskInput from '../organisms/TaskInput';
import TaskList from '../organisms/TaskList';
import './TodoPage.css';

const LOCAL_STORAGE_KEY = 'atomic-todo-tasks';

const TodoPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState('');

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = useCallback(() => {
    if (!input.trim()) return;
    setTasks((tasks) => [
      ...tasks,
      { id: Date.now().toString(), name: input.trim(), completed: false },
    ]);
    setInput('');
  }, [input]);

  const handleToggle = useCallback((id: string) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const handleEdit = useCallback((id: string) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      setEditingId(id);
      setEditingValue(task.name);
    }
  }, [tasks]);

  const handleEditChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingValue(e.target.value);
  }, []);

  const handleEditSave = useCallback(() => {
    if (editingId && editingValue.trim()) {
      setTasks((tasks) =>
        tasks.map((task) =>
          task.id === editingId ? { ...task, name: editingValue.trim() } : task
        )
      );
      setEditingId(null);
      setEditingValue('');
    }
  }, [editingId, editingValue]);

  const handleRemove = useCallback((id: string) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }, []);

  const handleRemoveCompleted = useCallback(() => {
    setTasks((tasks) => tasks.filter((task) => !task.completed));
  }, []);

  const taskListMemo = useMemo(() => (
    <TaskList
      tasks={tasks}
      onToggle={handleToggle}
      onEdit={handleEdit}
      onRemove={handleRemove}
    />
  ), [tasks, handleToggle, handleEdit, handleRemove]);

  return (
    <MainTemplate>
      <h1 className="todo-title">Atomic Design To-Do List</h1>
      <TaskInput
        value={input}
        onChange={e => setInput(e.target.value)}
        onAdd={handleAdd}
      />
      {taskListMemo}
      <button
        className="remove-completed-btn"
        onClick={handleRemoveCompleted}
        aria-label="Remove all completed tasks"
      >
        Remove Completed Tasks
      </button>
      {editingId && (
        <div className="edit-modal" role="dialog" aria-modal="true" aria-label="Edit Task">
          <input
            value={editingValue}
            onChange={handleEditChange}
            aria-label="Edit task name"
            autoFocus
            onKeyDown={e => {
              if (e.key === 'Enter') handleEditSave();
              if (e.key === 'Escape') setEditingId(null);
            }}
          />
          <button onClick={handleEditSave} aria-label="Save edited task">Save</button>
          <button onClick={() => setEditingId(null)} aria-label="Cancel editing">Cancel</button>
        </div>
      )}
    </MainTemplate>
  );
};

export default TodoPage; 