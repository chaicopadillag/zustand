import { JiraTasks } from '@/components/app/jira-tasks';
import { useTaskStore } from '@/stores/task.store';

export const JiraPage = () => {
  const getTaskByStatus = useTaskStore((state) => state.getTaskByStatus);

  const tasksPending = getTaskByStatus('pending');
  const tasksInProgress = getTaskByStatus('in-progress');
  const tasksDone = getTaskByStatus('done');

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <JiraTasks title='Pendientes' status='pending' tasks={tasksPending} />

        <JiraTasks title='Avanzando' status='in-progress' tasks={tasksInProgress} />

        <JiraTasks title='Terminadas' status='done' tasks={tasksDone} />
      </div>
    </>
  );
};
