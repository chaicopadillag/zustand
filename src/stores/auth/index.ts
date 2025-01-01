import { AuthUser } from '@/interfaces';
import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

export interface AuthState {
  authUser?: AuthUser;
  authStatus: AuthStatus;
  setAuthUser: (authUser: AuthUser) => void;
  setUnauthenticated: () => void;
}

const authStore: StateCreator<AuthState> = (set) => ({
  authStatus: 'loading',
  setAuthUser: (authUser) => set({ authStatus: 'authenticated', authUser }),
  setUnauthenticated: () => set({ authStatus: 'unauthenticated', authUser: undefined })
});

export const useAuthStore = create<AuthState>()(devtools(persist(authStore, { name: 'auth' })));
