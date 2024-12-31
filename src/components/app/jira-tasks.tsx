import { cn } from '@/lib/utils';
import { type Task, type TaskStatus, useTaskStore } from '@/stores/task.store';
import { DragEvent, useState } from 'react';
import { IoCheckmarkCircleOutline, IoEllipsisHorizontalOutline } from 'react-icons/io5';
import { Button } from '../ui/button';
import { TaskItem } from './task-item';

interface Props {
  title: string;
  status: TaskStatus;
  tasks: Task[];
}

export const JiraTasks = ({ title, status, tasks }: Props) => {
  const [onDraggable, setOnDraggable] = useState(false);
  const isDragging = useTaskStore((state) => !!state.dragTaskId);
  const changeTaskStatus = useTaskStore((state) => state.changeTaskStatus);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDraggable(true);
    console.log(`drag over ${status}`);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDraggable(false);
    console.log(`drag Leave ${status}`);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDraggable(false);
    changeTaskStatus(status);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        '!text-black relative flex flex-col rounded-[20px] bg-gray-100 bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px] border-2',
        {
          'border-blue-500 border-dotted': isDragging,
          'border-green-500 border-dotted': isDragging && onDraggable
        }
      )}
    >
      {/* Task Header */}
      <div className='relative flex flex-row justify-between'>
        <div className='flex items-center justify-center'>
          <div className='flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100'>
            <span className='flex justify-center items-center h-6 w-6 text-brand-500'>
              <IoCheckmarkCircleOutline style={{ fontSize: '50px' }} />
            </span>
          </div>

          <h4 className='ml-4 text-xl font-bold text-gray-700'>{title}</h4>
        </div>

        <Button variant='outline'>
          <IoEllipsisHorizontalOutline />
        </Button>
      </div>

      {/* Task Items */}
      <div className='h-full w-full'>
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};
