import { Container, Stack } from "@mui/material";
import { ProfileHeader, LevelSection, StatisticsSection } from "../features/profile";
import { useAuthStore } from "../shared/store/authStore";

const ProfilePage: React.FC = () => {
    const user = useAuthStore((state) => state.user!);

    return (
        <Container maxWidth="lg" sx={{ paddingY: 4 }}>
            <Stack spacing={5}>
                <ProfileHeader username={user.username} achievementsIds={user.achievements} />
                <Stack direction={{ xs: "column", md: "row" }} spacing={4} justifyContent="space-between">
                    <LevelSection level={user.lvl} experience={user.experience} />
                    <StatisticsSection
                        dishesCount={user.dishes.length}
                        challengesCount={user.challenges.length}
                    />
                </Stack>
            </Stack>
        </Container>
    );
};

export default ProfilePage;