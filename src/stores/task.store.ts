import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

export type TaskStatus = 'pending' | 'done' | 'in-progress';

export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
};

type TaskState = {
  tasks: Record<string, Task>;
  dragTaskId: string | null;
  getTaskByStatus: (status: TaskStatus) => Task[];
  setDragTaskId: (id: string) => void;
  removeDragTaskId: () => void;
  changeTaskStatus: (status: TaskStatus) => void;
};

const stateApi: StateCreator<TaskState> = (set, get) => ({
  tasks: {
    'e303e0d4-cf61-4b6b-b657-841535959d27': {
      id: 'e303e0d4-cf61-4b6b-b657-841535959d27',
      title: 'Task 1',
      status: 'pending'
    },
    'e303e0d4-cf61-4b6b-b657-841535959d28': {
      id: 'e303e0d4-cf61-4b6b-b657-841535959d28',
      title: 'Task 2',
      status: 'done'
    },
    'e303e0d4-cf61-4b6b-b657-841535959d29': {
      id: 'e303e0d4-cf61-4b6b-b657-841535959d29',
      title: 'Task 3',
      status: 'in-progress'
    },
    'e303e0d4-cf61-4b6b-b657-841535959d30': {
      id: 'e303e0d4-cf61-4b6b-b657-841535959d30',
      title: 'Task 4',
      status: 'pending'
    }
  },
  dragTaskId: null,
  getTaskByStatus: (status: TaskStatus) => {
    return Object.values(get().tasks).filter((task) => task.status === status);
  },
  setDragTaskId: (id) => set({ dragTaskId: id }),
  removeDragTaskId: () => set({ dragTaskId: null }),
  changeTaskStatus: (status) => {
    const dragTaskId = get().dragTaskId;
    if (!dragTaskId) return;
    const dragTask = get().tasks[dragTaskId];

    set((state) => ({
      tasks: {
        ...state.tasks,
        [dragTaskId]: {
          ...dragTask,
          status
        }
      }
    }));

    get().removeDragTaskId();
  }
});

export const useTaskStore = create<TaskState>()(devtools(stateApi));
