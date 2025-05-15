import { Card, Stack, Typography } from "@mui/material";

interface StatisticsCardProps {
    title: string;
    subtitle: string;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ title, subtitle }) => {
    return (
        <Card sx={{ py: 5, px: 2, minWidth: 240}}>
            <Stack justifyContent={"center"} spacing={1}>
                <Typography fontWeight={900} variant="h5">{title}</Typography>
                <Typography color="rgba(0, 0, 0, 0.6)">{subtitle}</Typography>
            </Stack>
        </Card>
    );
};

export default StatisticsCard;