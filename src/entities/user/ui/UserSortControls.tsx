import { Stack, Button } from "@mui/material";

interface UserSortControlsProps {
    sortBy: string;
    setSortBy: (sort: "lvl" | "dishes" | "achievements") => void;
}

const UserSortControls: React.FC<UserSortControlsProps> = ({ sortBy, setSortBy }) => (
    <Stack direction="row" justifyContent="center" mt={{ xs: 5, sm: 0 }} mb={2} spacing={2}>
        <Button variant={sortBy === "lvl" ? "contained" : "outlined"} onClick={() => setSortBy("lvl")}>
            По уровню
        </Button>
        <Button variant={sortBy === "dishes" ? "contained" : "outlined"} onClick={() => setSortBy("dishes")}>
            По количеству блюд
        </Button>
        <Button variant={sortBy === "achievements" ? "contained" : "outlined"} onClick={() => setSortBy("achievements")}>
            По достижениям
        </Button>
    </Stack>
);

export default UserSortControls;