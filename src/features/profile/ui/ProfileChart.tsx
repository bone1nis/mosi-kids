import { Box, Stack, Typography } from "@mui/material";
import profileChart from "../assets/profile-chart.png";

const ProfileChart: React.FC = () => {
    return (
        <Stack>
            <Typography textAlign={{ xs: "center", sm: "left" }} variant="h4" sx={{ mb: 2 }} fontWeight="bold">
                Статистика:
            </Typography>
            <Box component={"img"} src={profileChart} />
        </Stack>
    );
};

export default ProfileChart;