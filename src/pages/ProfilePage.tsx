import { Container, Stack } from "@mui/material";
import { LevelSection, StatisticsSection } from "../features/profile";
import { useAuthStore } from "../shared/store/authStore";
import ProfileHeaderV2 from "../features/profile/ui/ProfileHeaderV2";

const ProfilePage: React.FC = () => {
    const user = useAuthStore((state) => state.user!);

    return (
        <Container maxWidth="lg" sx={{ paddingY: 4 }}>
            <Stack spacing={5}>
                <ProfileHeaderV2 user={user} />
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