import { Container, Typography, useMediaQuery, useTheme, Stack } from "@mui/material";
import { useUserSorting, UserSortControls, UserTable, UserCard} from "../entities/user";
import { useUsersStore } from "../shared/store/usersStore";

const UserRatingPage: React.FC = () => {
    const users = useUsersStore(state => state.users);
    const { sortedUsers, sortBy, setSortBy } = useUserSorting(users);
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