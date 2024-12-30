import { useTaskStore, type Task } from '@/stores/task.store';
import { FC } from 'react';
import { IoReorderTwoOutline } from 'react-icons/io5';

export const TaskItem: FC<Task> = ({ id, title }) => {
  const setDragTaskId = useTaskStore((state) => state.setDragTaskId);
  const removeDragTaskId = useTaskStore((state) => state.removeDragTaskId);

  return (
    <div className='mt-5 flex items-center justify-between p-2' draggable onDrag={() => setDragTaskId(id)} onDragEnd={removeDragTaskId}>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-base font-bold text-navy-700'>{title}</p>
      </div>
      <span className=' h-6 w-6 text-navy-700 cursor-pointer'>
        <IoReorderTwoOutline />
      </span>
    </div>
  );
};
