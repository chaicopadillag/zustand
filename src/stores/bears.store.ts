import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type BearType = {
  id: number;
  name: string;
};

type BearStore = {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  bears: BearType[];
  totalBears: () => number;
  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;

  addBear: () => void;
  clearBears: () => void;
};

export const useBearStore = create<BearStore>()(
  persist(
    (set, get) => ({
      blackBears: 10,
      polarBears: 5,
      pandaBears: 1,
      totalBears: () => {
        return get().blackBears + get().polarBears + get().pandaBears + get().bears.length;
      },
      bears: [{ id: 1, name: 'Bear #1' }],
      increaseBlackBears: (by) => set((state) => ({ blackBears: state.blackBears + by })),
      increasePandaBears: (by) => set((state) => ({ pandaBears: state.pandaBears + by })),
      increasePolarBears: (by) => set((state) => ({ polarBears: state.polarBears + by })),
      addBear: () =>
        set((state) => ({
          bears: [
            ...state.bears,
            {
              id: state.bears.length + 1,
              name: `Bear ${state.bears.length + 1}`
            }
          ]
        })),
      clearBears: () => set(() => ({ bears: [] }))
    }),
    { name: 'bear-store' }
  )
);
