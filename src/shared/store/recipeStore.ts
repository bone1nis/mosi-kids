import { create } from "zustand";
import type { Recipe } from "../../entities/recipe";

export const useRecipeStore = create<{ recipes: Recipe[]; setRecipes: (recipes: Recipe[]) => void }>((set) => ({
    recipes: [
        {
            id: 1,
            title: "Паста Карбонара",
            description: "Классическая паста с беконом и сливочным соусом",
            lvl: 1,
            experience: 100,
            ingredients: ["Спагетти", "Бекон", "Сливки", "Яйца", "Сыр Пармезан"],
            steps: [
                "Отварите спагетти до состояния аль денте",
                "Обжарьте бекон до хрустящей корочки",
                "Смешайте яйца со сливками и сыром",
                "Соедините все ингредиенты и быстро перемешайте"
            ],
        },
        {
            id: 2,
            title: "Омлет с сыром",
            description: "Пушистый омлет с тянущимся сыром",
            lvl: 1,
            experience: 50,
            ingredients: ["Яйца", "Молоко", "Сыр", "Соль", "Перец"],
            steps: [
                "Взбейте яйца с молоком, солью и перцем",
                "Вылейте смесь на разогретую сковороду",
                "Добавьте натёртый сыр и готовьте до готовности"
            ],
        },
        {
            id: 3,
            title: "Салат Цезарь",
            description: "Свежий салат с курицей и соусом Цезарь",
            lvl: 2,
            experience: 70,
            ingredients: ["Курица", "Листья салата", "Пармезан", "Сухарики", "Соус Цезарь"],
            steps: [
                "Обжарьте курицу и нарежьте кусочками",
                "Выложите салат на тарелку",
                "Добавьте курицу, сухарики и пармезан",
                "Полейте соусом и перемешайте"
            ],
        },
        {
            id: 4,
            title: "Томатный суп",
            description: "Ароматный томатный суп с базиликом",
            lvl: 2,
            experience: 60,
            ingredients: ["Помидоры", "Лук", "Чеснок", "Базилик", "Оливковое масло"],
            steps: [
                "Обжарьте лук и чеснок в масле",
                "Добавьте помидоры и тушите 15 минут",
                "Пюрируйте суп блендером",
                "Добавьте базилик и приправы по вкусу"
            ],
        },
        {
            id: 5,
            title: "Чизкейк",
            description: "Нежный чизкейк с кремовым вкусом",
            lvl: 3,
            experience: 120,
            ingredients: ["Печенье", "Масло сливочное", "Сыр Филадельфия", "Сахар", "Яйца"],
            steps: [
                "Измельчите печенье и смешайте с маслом",
                "Выложите смесь в форму и утрамбуйте",
                "Смешайте сыр, сахар и яйца",
                "Выпекайте при 160°C 40 минут"
            ],
        },
        {
            id: 6,
            title: "Борщ",
            description: "Традиционный русский свекольный суп",
            lvl: 3,
            experience: 110,
            ingredients: ["Свекла", "Капуста", "Морковь", "Картофель", "Говядина"],
            steps: [
                "Отварите говядину до готовности",
                "Добавьте нарезанные овощи и варите до мягкости",
                "Добавьте томатную пасту и специи",
                "Подавайте со сметаной"
            ],
        }
    ],
    setRecipes: (recipes) => set({ recipes }),
}));