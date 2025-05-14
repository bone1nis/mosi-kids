import { Stack, Typography } from "@mui/material";
import { AchievementCard } from "../../achievement";

interface AchievementsSectionProps {
    achievements: number[];
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
    return (
        <Stack alignItems="center">
            <Typography variant="h5" sx={{ mb: 3 }} fontWeight="bold">
                Достижения
            </Typography>
            <Stack direction="row" spacing={3}>
                {achievements.length > 0 ? (
                    achievements.map((ach) => <AchievementCard key={ach} />)
                ) : (
                    <Typography>Нет достижений</Typography>
                )}
            </Stack>
        </Stack>
    );
};

export default AchievementsSection;