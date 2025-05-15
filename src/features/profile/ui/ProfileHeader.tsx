import { Stack, Typography } from "@mui/material";
import AchievementsSection from "./AchievementsSection";

interface ProfileHeaderProps {
    username: string;
    achievementsIds: number[];
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ username, achievementsIds }) => {
    return (
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center">
            <Typography variant="h3" fontWeight="bold">
                {username}
            </Typography>
            <AchievementsSection achievementsIds={achievementsIds} />
        </Stack>
    );
};


export default ProfileHeader;