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
        <Stack>
            <Typography textAlign={{ xs: "center", sm: "left" }} variant="h4" sx={{ mb: 2 }} fontWeight="bold">
                Достижения:
            </Typography>
            <Stack alignItems={"center"} direction={{ xs: "column", sm: "row" }} spacing={2}>
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