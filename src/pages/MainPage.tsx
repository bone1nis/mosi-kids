import React from "react";
import { Container, Typography, Stack, Paper, Button, Card, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from "@mui/material";
import { useNavigate } from "react-router";
import backgroundMain from "../shared/assets/images/background-main.png";
import backgroundGradient from "../shared/assets/images/background-gradient.png";
import { RecipeCard } from "../features/recipe";
import { useAuthStore } from "../shared/store/authStore";
import { useUsersStore } from "../shared/store/usersStore";
import { useRecipeStore } from "../shared/store/recipeStore";

const MainPage: React.FC = () => {
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);
    const users = useUsersStore((state) => state.users);
    const allRecipes = useRecipeStore((state) => state.recipes);

    const recipes = React.useMemo(() => {
        if (!user) return [];

        return allRecipes
            .filter(recipe =>
                user.lvl >= recipe.lvl &&
                !user.dishes.includes(recipe.id)
            )
            .slice(0, 4);
    }, [allRecipes, user]);

    const topUsers = [...users].sort((a, b) => b.experience - a.experience).slice(0, 3);

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{
                backgroundImage: `url(${backgroundMain})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: { xs: "300px", sm: "625px" }
            }}>
                <Typography variant="h1" fontWeight={900} sx={{ mt: 8, mb: 3, textAlign: "center" }}>
                    MosiKid’s
                </Typography>
            </Box>
            <Container>
                <Stack spacing={4} mt={5}>
                    <Stack direction={{ xs: "column", sm: "row" }} alignItems={"center"} justifyContent={"space-between"} sx={{
                        backgroundImage: `url(${backgroundGradient})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        p: 5,
                        borderRadius: 8
                    }}>
                        <Box>
                            <Typography variant="h4" fontWeight={900} sx={{ mb: 2 }}>
                                Челлендж дня
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Прими участие в челлендже дня и покажи свои кулинарные навыки!
                            </Typography>
                        </Box>
                        <Button variant="contained" onClick={() => navigate("/challenges")} sx={{ mb: { xs: 2, sm: 0 } }}>
                            Принять участие
                        </Button>
                    </Stack>

                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h4" sx={{ mb: 2 }}>
                            Топ пользователей
                        </Typography>

                        <TableContainer sx={{ display: { xs: "none", md: "block" } }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Пользователь</TableCell>
                                        <TableCell>Уровень</TableCell>
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
                    </Paper>

                    <Grid paddingBottom={5} container spacing={4}>
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
                </Stack>
            </Container>
        </Box>
    );
};

export default MainPage;