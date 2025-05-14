import { Box, Container, Paper, Stack, Typography, useTheme } from "@mui/material";
import { AchievementCard } from "../features/achievement";

const ProfilePage: React.FC = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="lg" sx={{ paddingY: 4 }}>
            <Stack spacing={5}>
                <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center">
                    <Typography variant="h3" fontWeight={"bold"} sx={{ mb: 3 }}>
                        Олег
                    </Typography>
                    <Stack alignItems="center">
                        <Typography variant="h5" sx={{ mb: 3 }} fontWeight={"bold"}>Достижения</Typography>
                        <Stack direction="row" spacing={3}>
                            <AchievementCard />
                            <AchievementCard />
                            <AchievementCard />
                        </Stack>
                    </Stack>
                </Stack>

                <Stack direction={{ xs: "column", md: "row" }} alignItems={"center"} spacing={4} justifyContent="space-between">
                    <Paper sx={{ p: 3, width: { xs: "100%", md: '48%' }, borderRadius: 2, boxShadow: 3 }}>
                        <Typography variant="h5" fontWeight={"bold"}>1 уровень</Typography>
                        <Box sx={{ width: '100%', mt: 2 }}>
                            <Box sx={{ height: 10, width: "88%", backgroundColor: theme.palette.secondary.light, borderRadius: 5 }}></Box>
                        </Box>
                        <Typography variant="h5" sx={{ mt: 2 }}>88 XP</Typography>
                    </Paper>

                    <Paper sx={{ p: 3, width: { xs: "100%", md: '48%' }, borderRadius: 2, boxShadow: 3 }}>
                        <Typography variant="h5" fontWeight={"bold"}>Статистика</Typography>
                        <Typography variant="h6" sx={{ mt: 1 }}>Время проведенное в игре:
                            <Typography component="span" sx={{ fontWeight: 'bold' }} variant="h6">
                                {" 8 часов"}
                            </Typography>
                        </Typography>
                        <Typography variant="h6" sx={{ mt: 1 }}>Количество приготовленных блюд:
                            <Typography component="span" sx={{ fontWeight: 'bold' }} variant="h6">
                                {" 7"}
                            </Typography>
                        </Typography>
                        <Typography variant="h6" sx={{ mt: 1 }}>Победы в челленджах: </Typography>
                        <Stack sx={{ mt: 1 }}>
                            <Typography>- Молекулярный тартар из тунца</Typography>
                            <Typography>- Макароны</Typography>
                        </Stack>
                    </Paper>
                </Stack>
            </Stack>
        </Container>
    );
};

export default ProfilePage;
