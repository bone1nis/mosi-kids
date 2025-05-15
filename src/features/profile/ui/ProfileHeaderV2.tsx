import { Card, Stack, Typography, Box, useTheme } from "@mui/material";
import userIcon from "../../user/assets/user-icon.png";
import type { User } from "../../../entities/user";

interface ProfileHeaderProps {
    user: User;
}

const ProfileHeaderV2: React.FC<ProfileHeaderProps> = ({ user }) => {

    const theme = useTheme();
    
    return (
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center">
            <Card sx={{ display: "flex", alignItems: "center", padding: 2, height: 125 }}>
                <Box
                    component="img"
                    src={userIcon}
                    alt="User Icon"
                    sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        marginRight: 2
                    }}
                />
                <Typography variant="h3" fontWeight={900}>{user.username}</Typography>
                <Typography variant="h4" fontWeight={900}>Уровень: {user.lvl}</Typography>

                <Box sx={{ width: '100%', mt: 2 }}>
                    <Box
                        sx={{
                            height: 10,
                            width: `${Math.min(user.experience, 100)}%`,
                            backgroundColor: theme.palette.secondary.light,
                            borderRadius: 5
                        }}
                    />
                </Box>
            </Card>
        </Stack>
    );
};

export default ProfileHeaderV2;