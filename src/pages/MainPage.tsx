import React from "react";
import { Container, Typography, Stack, Paper, Button, Card, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router";

const mockTopUsers = [
    { id: 1, username: "User1", level: 5, experience: 300 },
    { id: 2, username: "User2", level: 4, experience: 250 },
    { id: 3, username: "User3", level: 3, experience: 200 },
];

const MainPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Typography variant="h3" sx={{ mt: 3, mb: 3, textAlign: "center" }}>
                Добро пожаловать в нашу кухню
            </Typography>

            <Stack spacing={4}>
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        Челлендж дня
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Прими участие в челлендже дня и покажи свои кулинарные навыки!
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate("/challenges")}>
                        Принять участие
                    </Button>
                </Paper>

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
                                {mockTopUsers.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.username}</TableCell>
                                        <TableCell>{user.level}</TableCell>
                                        <TableCell>{user.experience} XP</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Grid container spacing={2} sx={{ display: { xs: "flex", md: "none" } }}>
                        {mockTopUsers.map((user) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={user.id}>
                                <Card sx={{ p: 2 }}>
                                    <Typography variant="h6">{user.username}</Typography>
                                    <Typography>Уровень: {user.level}</Typography>
                                    <Typography>Опыт: {user.experience} XP</Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigate("/rating")}>
                        Смотреть весь рейтинг
                    </Button>
                </Paper>

                <Paper sx={{ p: 3 }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        Доступные рецепты
                    </Typography>
                    <Stack spacing={2}>
                        <Typography variant="body1">Здесь можно перейти к списку доступных рецептов</Typography>
                    </Stack>
                    <Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigate("/recipes")}>
                        Смотреть все рецепты
                    </Button>
                </Paper>
            </Stack>
        </Container>
    );
};

export default MainPage;
