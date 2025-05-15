import { create } from "zustand";
import type { User } from "../../entities/user";

export const useAuthStore = create<{
    user: User | null;
    setUser: (user: User) => void;
}>((set) => ({
    user: {
        id: "cfd3136a-0cd4-4d75-8361-049ba5a543e4",
        email: "oleg@example.com",
        username: "Олег",
        lvl: 5,
        experience: 10,
        dishes: [1, 2],
        challenges: [1],
        achievements: [1],
    },
    setUser: (user) => set({ user }),
}));
