import { DragEvent, useState } from 'react';
import Swal from 'sweetalert2';
import { v4 as uuid } from 'uuid';

import { type Task, type TaskStatus, useTaskStore } from '@/stores/task.store';

export const useTask = () => {
  const [onDraggable, setOnDraggable] = useState(false);
  const isDragging = useTaskStore((state) => !!state.dragTaskId);
  const changeTaskStatus = useTaskStore((state) => state.changeTaskStatus);
  const addTask = useTaskStore((state) => state.addTask);

  const handleAddTask = async (status: TaskStatus) => {
    const newTask = await Swal.fire({
      title: 'Add New Task',
      input: 'text',
      inputLabel: 'Task Title',
      inputPlaceholder: 'Enter your task title',
      showCancelButton: true,
      confirmButtonText: 'Add Task',
      cancelButtonText: 'Cancel'
    });

    if (newTask.isDismissed) return;

    const title = newTask.value;
    if (!title) return;

    const task: Task = {
      id: uuid(),
      title,
      status
    };
    addTask(task);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDraggable(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDraggable(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, status: TaskStatus) => {
    e.preventDefault();
    setOnDraggable(false);
    changeTaskStatus(status);
  };

  return { onDraggable, isDragging, handleAddTask, handleDragOver, handleDragLeave, handleDrop };
};
