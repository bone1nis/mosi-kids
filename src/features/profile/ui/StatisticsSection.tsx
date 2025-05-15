import { Paper, Typography } from "@mui/material";

interface StatisticsSectionProps {
    dishesCount: number;
    challengesCount: number;
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({ dishesCount, challengesCount }) => {

    return (
        <Paper sx={{ p: 3, width: { xs: "100%", md: "48%" }, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h5" fontWeight="bold">Статистика</Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
                Количество приготовленных блюд:{" "}
                <Typography component="span" fontWeight="bold" display="inline">
                    {dishesCount}
                </Typography>
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
                Победы в челленджах:{" "}
                <Typography component="span" fontWeight="bold" display="inline">
                    {challengesCount > 0 ? challengesCount : "Нет побед"}
                </Typography>
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
                Время проведённое на платформе:{" "}
                <Typography component="span" fontWeight="bold" display="inline">
                    8 часов
                </Typography>
            </Typography>
        </Paper>
    );
};

export default StatisticsSection;