import { Container, Typography, useMediaQuery, useTheme, Stack } from "@mui/material";
import { useUserSorting, UserSortControls, UserTable, UserCard, type User } from "../entities/user";

const mockUsers: User[] = [
    { id: 1, email: "user1@example.com", username: "User1", level: 5, experience: 300, dishesCount: 10, challengesCount: 4, achievements: ["Поваренок", "Гуру кухни"] },
    { id: 2, email: "user2@example.com", username: "User2", level: 39, experience: 200, dishesCount: 5, challengesCount: 3, achievements: ["Начинающий повар"] }
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