import { create } from "zustand";
import type { User } from "../../entities/user";

export const useAuthStore = create<{
    user: User | null;
    setUser: (user: User) => void;
    addDish: (dishId: number) => void;
    addChallenge: (dishId: number) => void;
}>((set, get) => ({
    user: {
        id: "cfd3136a-0cd4-4d75-8361-049ba5a543e4",
        email: "oleg@example.com",
        username: "Олег",
        lvl: 5,
        experience: 10,
        dishes: [1, 2],
        challenges: [ 3, 4, 5],
        achievements: [1, 2, 3],
    },
    setUser: (user) => set({ user }),
    addDish: (dishId: number) => {
        const user = get().user;
        if (user) {
            set({
                user: {
                    ...user,
                    dishes: [...user.dishes, dishId],
                },
            });
        }
    },
    addChallenge: (challengeId: number) => {
        const user = get().user;
        if (user) {
            set({
                user: {
                    ...user,
                    challenges: [...user.challenges, challengeId],
                },
            });
        }
    },
}));
