import { Container, Stack } from "@mui/material";
import { AchievementsSection, ProfileHeader } from "../features/profile";
import { useAuthStore } from "../shared/store/authStore";
import ProfileChart from "../features/profile/ui/ProfileChart";

const ProfilePage: React.FC = () => {
    const user = useAuthStore((state) => state.user!);

    return (
        <Container maxWidth="lg" sx={{ paddingY: 4 }}>
            <Stack spacing={3} mt={11}>
                <ProfileHeader user={user} />
                <AchievementsSection achievementsIds={user.achievements} />
                <ProfileChart />
            </Stack>
        </Container>
    );
};

export default ProfilePage;