import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types/user.types';

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  login: (username: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: true,
      setUser: (user: User) => 
        set({ user, isLoggedIn: true }),
      login: (username: string) => 
        set({ 
          user: { name: username }, 
          isLoggedIn: true 
        }),
      logout: () => 
        set({ 
          user: null, 
          isLoggedIn: false 
        }),
    }),
    {
      name: 'user-storage', // localStorage key
      partialize: (state) => ({ 
        user: state.user, 
        isLoggedIn: state.isLoggedIn 
      }),
    }
  )
);
