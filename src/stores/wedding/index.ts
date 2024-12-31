import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { DateSlice, useDateSlice } from './date-slice';
import { GuestSlice, useGuestSlice } from './guest-slice';
import { PersonSlice, usePersonSlice } from './person-slice';

interface WeddingStore extends PersonSlice, GuestSlice, DateSlice {}

export const useWeddingStore = create<WeddingStore>()(
  devtools((...a) => ({
    ...usePersonSlice(...a),
    ...useGuestSlice(...a),
    ...useDateSlice(...a)
  }))
);
