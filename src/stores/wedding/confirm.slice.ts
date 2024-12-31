import { StateCreator } from 'zustand';

export interface ConfirmSlice {
  isConfirmed: boolean;
  setConfirmed: (value: boolean) => void;
}

export const useConfirmSlice: StateCreator<ConfirmSlice> = (set) => ({
  isConfirmed: false,
  setConfirmed: (value) => set({ isConfirmed: value })
});
