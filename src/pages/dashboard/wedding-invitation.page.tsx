import { WhiteCard } from '@/components/app/white-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useWeddingStore } from '@/stores/wedding';
import { useShallow } from 'zustand/react/shallow';

export const WeddingInvitationPage = () => {
  const {
    firstName,
    lastName,
    setFirstName,
    setLastName,
    guestCount,
    setGuestCount,
    getDate,
    getTime,
    setEventDate,
    setEventTime,
    isConfirmed,
    setConfirmed
  } = useWeddingStore(useShallow((state) => state));

  return (
    <>
      <h1>Invitación de Boda</h1>
      <p>Zustand segmentado en slices</p>
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
            <div className='mb-5'>
              <label className='mb-3 block text-base font-medium text-[#07074D]'>¿Cuántos invitados traerá?</label>
              <Input
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                type='number'
                name='guestNumber'
                id='guestNumber'
                placeholder='5'
                min='0'
                className='w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>

            <div className='-mx-3 flex flex-wrap'>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>Fecha de evento</label>
                  <Input type='date' value={getDate()} onChange={(e) => setEventDate(e.target.value)} name='eventDate' id='eventDate' />
                </div>
              </div>
              <div className='w-full px-3 sm:w-1/2'>
                <div className='mb-5'>
                  <label className='mb-3 block text-base font-medium text-[#07074D]'>Hora del evento</label>
                  <Input onChange={(e) => setEventTime(e.target.value)} value={getTime()} type='time' name='eventTime' id='eventTime' />
                </div>
              </div>
            </div>

            <div className='mb-5'>
              <label className='mb-3 block text-base font-medium text-[#07074D]'>¿Tu también vendrás?</label>
              <div className='flex items-center space-x-6'>
                <div className='flex items-center'>
                  <Input
                    checked={isConfirmed}
                    onChange={() => setConfirmed(true)}
                    type='radio'
                    name='isComing'
                    id='radioButton1'
                    className='h-5 w-5'
                  />
                  <label className='pl-3 text-base font-medium text-[#07074D]'>Si</label>
                </div>
                <div className='flex items-center'>
                  <Input
                    checked={!isConfirmed}
                    onChange={() => setConfirmed(false)}
                    type='radio'
                    name='isComing'
                    id='radioButton2'
                    className='h-5 w-5'
                  />
                  <label className='pl-3 text-base font-medium text-[#07074D]'>No</label>
                </div>
              </div>
            </div>

            <div>
              <Button>Enviar</Button>
            </div>
          </form>
        </div>
      </WhiteCard>
    </>
  );
};
