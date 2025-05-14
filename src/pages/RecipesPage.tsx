import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import RecipeCard from "../features/recipe/ui/RecipeCard";
import type { Recipe } from "../entities/recipe";

const mockRecipes: Recipe[] = [
    {
        id: 1,
        title: "Омлет",
        level: 2,
        experience: 30,
        ingredients: ["Яйца", "Соль", "Молоко"],
        steps: [
            "Подготовьте ингредиенты",
            "Смешайте яйца с молоком и солью",
            "Обжарьте смесь на сковороде"
        ]
    },
    {
        id: 2,
        title: "Салат Цезарь",
        level: 3,
        experience: 50,
        ingredients: ["Салат", "Курица", "Соус", "Сыр"],
        steps: [
            "Нарежьте курицу",
            "Приготовьте соус",
            "Смешайте ингредиенты"
        ]
    },
    {
        id: 3,
        title: "Паста Карбонара",
        level: 4,
        experience: 70,
        ingredients: ["Спагетти", "Бекон", "Яйца", "Сыр", "Сливки"],
        steps: [
            "Отварите спагетти",
            "Обжарьте бекон",
            "Смешайте яйца с сыром и сливками",
            "Смешайте пасту с соусом"
        ]
    },
    {
        id: 4,
        title: "Томатный суп",
        level: 2,
        experience: 40,
        ingredients: ["Помидоры", "Лук", "Чеснок", "Сливки", "Зелень"],
        steps: [
            "Обжарьте лук и чеснок",
            "Добавьте нарезанные помидоры",
            "Доведите до кипения и взбейте блендером",
            "Добавьте сливки и зелень"
        ]
    },
    {
        id: 5,
        title: "Чизкейк",
        level: 5,
        experience: 100,
        ingredients: ["Печенье", "Сливочное масло", "Сыр Филадельфия", "Сахар", "Яйца"],
        steps: [
            "Измельчите печенье и смешайте с маслом",
            "Выложите основу в форму",
            "Смешайте сыр с сахаром и яйцами",
            "Запекайте 40 минут при 160°C"
        ]
    }
];


const RecipesPage: React.FC = () => {
    return (
        <Container>
            <Typography variant="h3" sx={{ mb: 3 }} align="center">Рецепты</Typography>
            <Grid container spacing={4} >
                {mockRecipes.map((recipe) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={recipe.id}>
                        <RecipeCard recipe={recipe} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default RecipesPage;