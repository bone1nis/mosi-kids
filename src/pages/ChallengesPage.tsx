import { Container, Typography, Stack } from "@mui/material";
import { ChallengeTimer } from "../features/challenge";
import {type Recipe } from "../entities/recipe";
import { RecipeCard } from "../features/recipe";

const mockRecipe: Recipe = {
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
};

const ChallengePage: React.FC = () => {
    return (
        <Container>
            <Stack alignItems={"center"}>
                <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
                    Челлендж дня
                </Typography>
                <ChallengeTimer initialTime={24 * 60 * 60} />
                <RecipeCard recipe={mockRecipe} />
            </Stack>
        </Container>
    );
};

export default ChallengePage