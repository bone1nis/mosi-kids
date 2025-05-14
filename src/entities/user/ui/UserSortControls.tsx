import { Stack, Button } from "@mui/material";

interface UserSortControlsProps {
    sortBy: string;
    setSortBy: (sort: "level" | "dishesCount" | "achievements") => void;
}

const UserSortControls: React.FC<UserSortControlsProps> = ({ sortBy, setSortBy }) => (
    <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
        <Button variant={sortBy === "level" ? "contained" : "outlined"} onClick={() => setSortBy("level")}>
            По уровню
        </Button>
        <Button variant={sortBy === "dishesCount" ? "contained" : "outlined"} onClick={() => setSortBy("dishesCount")}>
            По количеству блюд
        </Button>
        <Button variant={sortBy === "achievements" ? "contained" : "outlined"} onClick={() => setSortBy("achievements")}>
            По достижениям
        </Button>
    </Stack>
);

export default UserSortControls;