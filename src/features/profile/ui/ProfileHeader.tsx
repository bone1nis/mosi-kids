import { Stack, Typography } from "@mui/material";
import AchievementsSection from "./AchievementsSection";

interface ProfileHeaderProps {
    username: string;
    achievements: number[];
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ username, achievements }) => {
    return (
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center">
            <Typography variant="h3" fontWeight="bold">
                {username}
            </Typography>
            <AchievementsSection achievements={achievements} />
        </Stack>
    );
};


export default ProfileHeader;