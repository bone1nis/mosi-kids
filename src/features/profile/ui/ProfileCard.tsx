import { Box, Card, Stack, Typography } from "@mui/material";
import profileIcon from "../../../features/profile/assets/profile-icon.png";

interface UserCardProps {
    username: string;
    lvl: number;
    experience: number;
}

const ProfileCard: React.FC<UserCardProps> = ({ username, lvl, experience }) => {
    return (
        <Card sx={{
            p: 1,
            width: { xs: 390, sm: 390 },
            minWidth: 390,
        }}>
            <Stack
                alignItems={"center"}
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 0, sm: 8 }}
                sx={{
                    height: { xs: "auto", sm: 125 },
                    width: "100%",
                }}
            >
                <Box
                    component={"img"}
                    src={profileIcon}
                    width={155}
                    height={155}
                />
                <Stack spacing={1} sx={{ flex: 1 }} justifyContent={"center"}>
                    <Typography variant="h5" fontWeight={900}>{username}</Typography>
                    <Typography variant="h6" fontWeight={900}>{lvl} уровень</Typography>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Box sx={{ width: '100%', background: "rgba(156, 39, 176, 0.6)" }}>
                            <Box
                                sx={{
                                    height: 10,
                                    width: `${Math.min(experience, 100)}%`,
                                    backgroundColor: "#9C27B0",
                                    borderRadius: 5
                                }}
                            />
                        </Box>
                        <Typography>{experience}%</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Card>

    );
};

export default ProfileCard;
