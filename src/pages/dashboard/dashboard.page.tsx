import { InformationPrivate } from '@/components/app/information';
import { WhiteCard } from '@/components/app/white-card';
import { useAuthStore } from '@/stores/auth';
import { useBearStore } from '@/stores/bears.store';
import { usePersonStore } from '@/stores/person.store';
import { useTaskStore } from '@/stores/task.store';
import { IoAccessibilityOutline, IoHeartOutline, IoListOutline, IoLockClosedOutline, IoPawOutline } from 'react-icons/io5';
import { useShallow } from 'zustand/react/shallow';

export const DashboardPage = () => {
  const totalBears = useBearStore((state) => state.totalBears);
  const firstName = usePersonStore((state) => state.firstName);
  const totalTasks = useTaskStore(useShallow((state) => state.getTotalTasks()));
  const { authStatus, authUser } = useAuthStore((state) => state);

  return (
    <>
      <h1>Dashboard</h1>
      <p>Información colectiva de varios stores de Zustand</p>
      <hr />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <WhiteCard centered>
          <IoPawOutline size={50} className='text-indigo-600' />
          <h2>Osos</h2>
          <p>{totalBears()}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoAccessibilityOutline size={50} className='text-indigo-600' />
          <h2>Persona</h2>
          <p>{firstName}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoListOutline size={50} className='text-indigo-600' />
          <h2>Tareas</h2>
          <p>{totalTasks}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoHeartOutline size={50} className='text-indigo-600' />
          <h2>Boda</h2>
          <p>Información</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoLockClosedOutline size={50} className='text-indigo-600' />
          <h2>Auth</h2>
          {authStatus === 'authenticated' && <p>{authUser?.fullName}</p>}
        </WhiteCard>
        <WhiteCard centered className='col-span-4'>
          <InformationPrivate />
        </WhiteCard>
      </div>
    </>
  );
};
