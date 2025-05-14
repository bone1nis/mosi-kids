import { Container, Stack } from "@mui/material";
import { ProfileHeader, LevelSection, StatisticsSection } from "../features/profile";
import { type User } from "../entities/user"

const ProfilePage: React.FC = () => {
    const user: User = {
        id: "cfd3136a-0cd4-4d75-8361-049ba5a543e4",
        email: "user@example.com",
        username: "DefaultUser",
        lvl: 1,
        experience: 70,
        dishes: [1, 2, 3],
        challenges: [1, 2, 3],
        achievements: [1, 2, 3],
    };

    return (
        <Container maxWidth="lg" sx={{ paddingY: 4 }}>
            <Stack spacing={5}>
                <ProfileHeader username={user.username} achievements={user.achievements} />
                <Stack direction={{ xs: "column", md: "row" }} spacing={4} justifyContent="space-between">
                    <LevelSection level={user.lvl} experience={user.experience} />
                    <StatisticsSection
                        dishes={user.dishes}
                        challenges={user.achievements}
                    />
                </Stack>
            </Stack>
        </Container>
    );
};

export default ProfilePage;