import React, { useEffect, useMemo, useState } from "react";
import { Container, Typography, Stack, Button, Card, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from "@mui/material";
import { useNavigate } from "react-router";
import backgroundMain from "../shared/assets/images/background-main.jpg";
import backgroundGradient from "../shared/assets/images/background-gradient.png";
import { RecipeCard } from "../features/recipe";
import { useAuthStore } from "../shared/store/authStore";
import { useUsersStore } from "../shared/store/usersStore";
import { useRecipeStore } from "../shared/store/recipeStore";
import ChallengeBox from "../features/challenge/assets/challenge-box.png";

const MainPage: React.FC = () => {
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);
    const users = useUsersStore((state) => state.users);
    const allRecipes = useRecipeStore((state) => state.recipes);

    const recipes = useMemo(() => {
        if (!user) return [];

        return allRecipes
            .filter(recipe =>
                user.lvl >= recipe.lvl &&
                !user.dishes.includes(recipe.id)
            )
            .slice(0, 4);
    }, [allRecipes, user]);

    const topUsers = [...users].sort((a, b) => b.experience - a.experience).slice(0, 3);

    const [secondsLeft, setSecondsLeft] = useState(24 * 60 * 60);

    useEffect(() => {
        if (secondsLeft <= 0) return;

        const timerId = setInterval(() => {
            setSecondsLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [secondsLeft]);

    const formatTime = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const hDisplay = hours > 0 ? String(hours).padStart(2, "0") + ":" : "";
        const mDisplay = String(minutes).padStart(2, "0") + ":";
        const sDisplay = String(seconds).padStart(2, "0");

        return hDisplay + mDisplay + sDisplay;
    };

    return (
        <Box sx={{ width: "100%", background: "#E0EFFF" }}>
            <Stack spacing={5} alignItems={"center"} sx={{
                backgroundImage: `url(${backgroundMain})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: { xs: "500px", sm: "625px" }
            }}>
                <Typography color="text.secondary" variant="h1" fontWeight={900} sx={{ pt: 15, textAlign: "center" }}>
                    MosiKid’s
                </Typography>
                <Typography color="text.secondary" variant="h5" sx={{ textAlign: "center" }}>
                    Готовь свои любимые блюда
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate("/recipes")}>
                    Начать готовить
                </Button>
            </Stack>
            <Container>
                <Stack my={2}>
                    <Stack onClick={() => navigate("/challenges")} p={5} direction={{ xs: "column", sm: "row" }} alignItems={"center"} justifyContent={"space-between"} sx={{
                        backgroundImage: `url(${backgroundGradient})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        borderRadius: 8,
                        cursor: "pointer",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                    }}>
                        <Stack spacing={3}>
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems={"center"}>
                                <Typography color="text.secondary" variant="h4" fontWeight={900} sx={{ mb: 2 }}>
                                    Челлендж дня
                                </Typography>
                                <Typography variant="h4" fontWeight={900} color={"rgba(255, 255, 255, 0.5)"}>
                                    {formatTime(secondsLeft)}
                                </Typography>
                            </Stack>
                            <Typography color="text.secondary" variant="body1" sx={{ mb: 2 }}>
                                Прими участие в челлендже дня и покажи свои кулинарные навыки!
                            </Typography>
                        </Stack>
                        <Box
                            component="img"
                            src={ChallengeBox}
                            sx={{
                                display: { xs: "none", md: "block" },
                            }}
                        />
                    </Stack>

                    <Grid mb={3} container spacing={4}>
                        {recipes.length > 0 ? (
                            recipes.map((recipe) => (
                                <Grid size={{ xs: 12, sm: 6 }} key={recipe.id}>
                                    <RecipeCard recipe={recipe} />
                                </Grid>
                            ))
                        ) : (
                            <Grid size={12}>
                                <Typography variant="h6" align="center" color="text.secondary">
                                    Доступных рецептов нет
                                </Typography>
                            </Grid>
                        )}
                    </Grid>

                    <Box sx={{ p: 3, background: "#3193FF", borderRadius: 3 }}>
                        <Typography color="text.secondary" variant="h4" fontWeight={900} sx={{ mb: 2 }}>
                            Топ пользователей
                        </Typography>

                        <TableContainer sx={{ display: { xs: "none", md: "block" } }}>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ background: "#55a6ff" }}>
                                        <TableCell >Пользователь</TableCell>
                                        <TableCell >Уровень</TableCell>
                                        <TableCell>Опыт</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {topUsers.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell>{user.username}</TableCell>
                                            <TableCell>{user.lvl}</TableCell>
                                            <TableCell>{user.experience} XP</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Grid container spacing={2} sx={{ display: { xs: "flex", md: "none" } }}>
                            {topUsers.map((user) => (
                                <Grid size={{ xs: 12, sm: 6 }} key={user.id}>
                                    <Card sx={{ p: 2 }}>
                                        <Typography variant="h6">{user.username}</Typography>
                                        <Typography>Уровень: {user.lvl}</Typography>
                                        <Typography>Опыт: {user.experience} XP</Typography>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                        <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate("/rating")}>
                            Смотреть весь рейтинг
                        </Button>
                    </Box>
                </Stack>
            </Container>
        </Box >
    );
};

export default MainPage;