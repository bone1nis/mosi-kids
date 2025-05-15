import { create } from "zustand";
import type { Achievement } from "../../entities/achievement";

export const useAchievementStore = create<{ achievements: Achievement[]; setAchievements: (achievements: Achievement[]) => void }>((set) => ({
    achievements: [
        { id: 1, title: "Первое достижение", description: "Вы получили своё первое достижение!" },
        { id: 2, title: "Мастер повар", description: "Приготовьте 10 разных блюд" },
        { id: 3, title: "Испытание пройдено", description: "Успешно завершите 5 челленджей" },
        { id: 4, title: "Опытный кулинар", description: "Наберите 1000 очков опыта" }
    ],
    setAchievements: (achievements) => set({ achievements }),
}));

