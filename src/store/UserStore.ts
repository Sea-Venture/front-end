import { create } from 'zustand';

interface UserState {
    token: string | null;
    role: string | null;
    email: string | null;
    setToken: (token: string | null) => void;
    setRole: (role: string | null) => void;
    setEmail: (email: string | null) => void;
    reset: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    token: null,
    role: null,
    email: null,
    setToken: (token) => set({ token }),
    setRole: (role) => set({ role }),
    setEmail: (email) => set({ email }),
    reset: () => set({ token: null, role: null, email: null }),
}));