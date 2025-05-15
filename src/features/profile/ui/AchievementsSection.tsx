import { Stack, Typography } from "@mui/material";
import { AchievementCard } from "../../achievement";
import { useAchievementStore } from "../../../shared/store/achievementStore";

interface AchievementsSectionProps {
    achievementsIds: number[];
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievementsIds }) => {
    const { achievements } = useAchievementStore();

    const userAchievements = achievements.filter((ach) => achievementsIds.includes(ach.id));

    return (
        <Stack alignItems="center">
            <Typography variant="h5" sx={{ mb: 3 }} fontWeight="bold">
                Достижения
            </Typography>
            <Stack direction="row" spacing={3}>
                {userAchievements.length > 0 ? (
                    userAchievements.map((ach) => <AchievementCard key={ach.id} achievement={ach} />)
                ) : (
                    <Typography>Нет достижений</Typography>
                )}
            </Stack>
        </Stack>
    );
};

export default AchievementsSection;