import { Container, Typography, useMediaQuery, useTheme, Stack } from "@mui/material";
import { useUserSorting, UserSortControls, UserTable, UserCard, type User } from "../entities/user";

const mockUsers: User[] = [
    {
        id: "ываыва",
        email: "user1@example.com",
        username: "User1",
        lvl: 5,
        experience: 300,
        dishes: [2, 3],
        challenges: [4, 5],
        achievements: [1, 2]
    },
    {
        id: "ыва",
        email: "user2@example.com",
        username: "User2",
        lvl: 39,
        experience: 200,
        dishes: [2, 3],
        challenges: [2, 3],
        achievements: [1, 2]
    }
];

const UserRatingPage: React.FC = () => {
    const { sortedUsers, sortBy, setSortBy } = useUserSorting(mockUsers);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>Рейтинг пользователей</Typography>
            <UserSortControls sortBy={sortBy} setSortBy={setSortBy} />
            {isSmallScreen ? (
                <Stack spacing={2}>{sortedUsers.map(user => <UserCard key={user.id} user={user} />)}</Stack>
            ) : (
                <UserTable users={sortedUsers} />
            )}
        </Container>
    );
};

export default UserRatingPage;