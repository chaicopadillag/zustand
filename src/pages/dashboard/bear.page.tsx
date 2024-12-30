import { WhiteCard } from '@/components/app/white-card';
import { Button } from '@/components/ui/button';
import { useBearStore } from '@/stores/bears.store';
import { useShallow } from 'zustand/react/shallow';

const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        <BlackBear />
        <PolarBear />
        <PandaBear />
        <BearsShow />
      </div>
    </>
  );
};

const BlackBear = () => {
  const { blackBears, increaseBlackBears } = useBearStore(useShallow((state) => state));

  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className='flex flex-col md:flex-row'>
        <Button onClick={() => increaseBlackBears(+1)}> +1</Button>
        <span className='text-3xl mx-2 lg:mx-10'> {blackBears} </span>
        <Button onClick={() => increaseBlackBears(-1)}>-1</Button>
      </div>
    </WhiteCard>
  );
};
const PolarBear = () => {
  const { polarBears, increasePolarBears } = useBearStore(useShallow((state) => state));

  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className='flex flex-col md:flex-row'>
        <Button onClick={() => increasePolarBears(+1)}> +1</Button>
        <span className='text-3xl mx-2 lg:mx-10'> {polarBears} </span>
        <Button onClick={() => increasePolarBears(-1)}>-1</Button>
      </div>
    </WhiteCard>
  );
};
const PandaBear = () => {
  const { pandaBears, increasePandaBears } = useBearStore(useShallow((state) => state));

  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className='flex flex-col md:flex-row'>
        <Button onClick={() => increasePandaBears(+1)}> +1</Button>
        <span className='text-3xl mx-2 lg:mx-10'> {pandaBears} </span>
        <Button onClick={() => increasePandaBears(-1)}>-1</Button>
      </div>
    </WhiteCard>
  );
};

export const BearsShow = () => {
  const { bears, addBear, clearBears } = useBearStore(useShallow((state) => state));
  return (
    <WhiteCard>
      <h2>Osos</h2>
      <div className='flex flex-col md:flex-row gap-2'>
        <Button onClick={addBear}>Add</Button>
        <Button onClick={clearBears}>Clear</Button>
      </div>
      <pre>{JSON.stringify(bears, null, 2)}</pre>
    </WhiteCard>
  );
};

export default BearPage;
