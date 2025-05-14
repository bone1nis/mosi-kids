import { Card, Typography, Stack, CardMedia } from "@mui/material";
import achievementIcon from "../assets/achievement-icon.svg"

const AchievementCard: React.FC = () => {
    return (
        <Card sx={{padding: 2}}>
            <CardMedia
                component="img"
                alt="Иконка достижения"
                height="50"
                image={achievementIcon}
                sx={{ objectFit: 'contain' }}
            />
            <Stack>
                <Typography variant="h6" align="center" fontWeight={"bold"}>Бургер</Typography>
                <Typography align="center">На вредном</Typography>
            </Stack>
        </Card>
    );
};

export default AchievementCard;