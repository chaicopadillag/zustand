import { create, StateCreator } from 'zustand';
import { createJSONStorage, devtools, persist, StateStorage } from 'zustand/middleware';

type PersonState = {
  firstName: string;
  lastName: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
};

const storeApi: StateCreator<PersonState> = (set) => ({
  firstName: '',
  lastName: '',
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName })
});

const customSessionStorage: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    return sessionStorage.getItem(name);
  },
  setItem: function (name: string, value: string): void {
    sessionStorage.setItem(name, value);
  },
  removeItem: function (name: string): void {
    sessionStorage.removeItem(name);
  }
};

export const usePersonStore = create<PersonState>()(
  devtools(
    persist(storeApi, {
      name: 'person-store',
      storage: createJSONStorage(() => customSessionStorage)
    })
  )
);
