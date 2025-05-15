import { create } from "zustand";
import type { Challenge } from "../../entities/challenge";

export const useChallengeStore = create<{ challenges: Challenge[]; setChallenges: (challenges: Challenge[]) => void }>((set) => ({
    challenges: [
        {
            id: 1,
            title: "Первый вызов",
            experience: 50,
            steps: [
                "Подготовьте необходимые ингредиенты",
                "Выполните первый шаг",
                "Завершите задание"
            ],
            ingredients: ["Ингредиент 1", "Ингредиент 2"],
            description: "Выполните первый вызов, чтобы получить опыт"
        },
        {
            id: 2,
            title: "Готовим омлет",
            experience: 70,
            steps: [
                "Взбейте яйца",
                "Обжарьте смесь на сковороде",
                "Подавайте с зеленью"
            ],
            ingredients: ["Яйца", "Соль", "Молоко"],
            description: "Приготовьте вкусный омлет"
        },
        {
            id: 3,
            title: "Приготовление салата Цезарь",
            experience: 90,
            steps: [
                "Нарежьте курицу",
                "Приготовьте соус",
                "Смешайте ингредиенты"
            ],
            ingredients: ["Курица", "Салат", "Соус", "Сыр"],
            description: "Создайте классический салат Цезарь"
        }
    ],
    setChallenges: (challenges) => set({ challenges }),
}));