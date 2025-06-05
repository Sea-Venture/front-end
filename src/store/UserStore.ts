import { create } from 'zustand';

type UserState = {
    token: string | null;
    role: string | null;
    email: string | null;
    setToken: (token: string | null) => void;
    setRole: (role: string | null) => void;
    setEmail: (email: string | null) => void;
    reset: () => void;
};

let localToken: string | null = null;
let localRole: string | null = null;
let localEmail: string | null = null;

if (typeof window !== 'undefined') {
    localToken = localStorage.getItem('token');
    localRole = localStorage.getItem('role');
    localEmail = localStorage.getItem('email');
}

export const useUserStore = create<UserState>((set) => ({
    token: localToken,
    role: localRole,
    email: localEmail,

    setToken: (token) => {
        set({ token });
        if (typeof window !== 'undefined') {
            if (token) {
                localStorage.setItem('token', token);
            } else {
                localStorage.removeItem('token');
            }
        }
    },

    setRole: (role) => {
        set({ role });
        if (typeof window !== 'undefined') {
            if (role) {
                localStorage.setItem('role', role);
            } else {
                localStorage.removeItem('role');
            }
        }
    },

    setEmail: (email) => {
        set({ email });
        if (typeof window !== 'undefined') {
            if (email) {
                localStorage.setItem('email', email);
            } else {
                localStorage.removeItem('email');
            }
        }
    },

    reset: () => {
        set({ token: null, role: null, email: null });
        if (typeof window !== 'undefined') {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('email');
        }
    }
}));