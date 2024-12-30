import { WhiteCard } from '@/components/app/white-card';
import { Input } from '@/components/ui/input';
import { usePersonStore } from '@/stores/person.store';
import React from 'react';
import { useShallow } from 'zustand/react/shallow';

export const PersonPage = () => {
  const { firstName, lastName, setFirstName, setLastName } = usePersonStore(useShallow((state) => state));

  return (
    <>
      <h1>Persona</h1>
      <p>Información que se compartirá a otro store, Session Storage y Firebase</p>
      <hr />

      <WhiteCard className='flex items-center justify-center p-12'>
        <div className='mx-auto w-full max-w-[550px]'>
          <form>
            <div className='-mx-3 flex flex-wrap'>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>Primer Nombre</label>
                  <Input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type='text'
                    name='firstName'
                    id='firstName'
                    placeholder='Primer Nombre'
                  />
                </div>
              </div>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>Apellido</label>
                  <Input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type='text'
                    name='lastName'
                    id='lastName'
                    placeholder='Apellido'
                  />
                </div>
              </div>
            </div>

            <pre className='bg-gray-200 p-5 rounded-[20px]'>
              {JSON.stringify(
                {
                  firstName,
                  lastName
                },
                null,
                2
              )}
            </pre>
          </form>
        </div>
      </WhiteCard>
    </>
  );
};
