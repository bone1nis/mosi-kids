import { Container, Typography, Stack, Divider, Paper, useMediaQuery, useTheme } from "@mui/material";
import { ChallengeTimer } from "../features/challenge";
import { type Recipe } from "../entities/recipe";
import { RecipeCard } from "../features/recipe";
import type { Challenge } from "../entities/challenge";

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

const mockChallenge: Challenge = {
    id: 1,
    title: "Самая быстрая готовка",
    description: "Сможете ли вы приготовить омлет за рекордное время?",
    recipe: mockRecipe
}

const ChallengePage: React.FC = () => {
    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                <Stack spacing={2} alignItems="center" textAlign="center">
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        {mockChallenge.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {mockChallenge.description}
                    </Typography>
                    <Divider sx={{ my: 3, width: "80%" }} />
                    <ChallengeTimer initialTime={24 * 60 * 60} />
                </Stack>
            </Paper>

            <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
                <RecipeCard recipe={mockRecipe} minWidth={isBigScreen ? 400 : "100%"} />
            </Stack>
        </Container>
    );
};

export default ChallengePage;