import { Paper, Stack, Typography } from "@mui/material";

interface StatisticsSectionProps {
    dishes: number[];
    challenges: number[];
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({ dishes, challenges }) => {
    return (
        <Paper sx={{ p: 3, width: { xs: "100%", md: "48%" }, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h5" fontWeight="bold">Статистика</Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
                Количество приготовленных блюд: 
                <Typography component="span" fontWeight="bold" display="inline">
                    {` ${dishes.length}`}
                </Typography>
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>Победы в челленджах:</Typography>
            <Stack sx={{ mt: 1 }}>
                {challenges.length > 0 ? (
                    challenges.map((challenge, index) => (
                        <Typography key={index}>- {challenge}</Typography>
                    ))
                ) : (
                    <Typography>Нет побед</Typography>
                )}
            </Stack>
        </Paper>
    );
};

export default StatisticsSection;