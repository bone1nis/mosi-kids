import { create } from "zustand";
import type { User } from "../../entities/user";

interface UsersState {
    users: User[];
    setUsers: (users: User[]) => void;
    addUser: (user: User) => void;
    updateUser: (user: User) => void;
    removeUser: (userId: string) => void;
}

export const useUsersStore = create<UsersState>((set) => ({
    users: [
        {
            id: "1",
            email: "oleg@example.com",
            username: "Олег",
            lvl: 5,
            experience: 120,
            dishes: [1, 2],
            challenges: [1],
            achievements: [1, 2],
        },
        {
            id: "2",
            email: "masha@example.com",
            username: "Маша",
            lvl: 3,
            experience: 80,
            dishes: [3, 4, 5],
            challenges: [2],
            achievements: [3],
        },
        {
            id: "3",
            email: "ivan@example.com",
            username: "Иван",
            lvl: 4,
            experience: 90,
            dishes: [6, 7],
            challenges: [3, 4],
            achievements: [4, 5],
        },
    ],

    setUsers: (users) => set({ users }),

    addUser: (user) =>
        set((state) => ({
            users: [...state.users, user],
        })),

    updateUser: (updatedUser) =>
        set((state) => ({
            users: state.users.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            ),
        })),

    removeUser: (userId) =>
        set((state) => ({
            users: state.users.filter((user) => user.id !== userId),
        })),
}));
