import {Paper, Typography, Box, useTheme} from "@mui/material";

interface LevelSectionProps {
    level: number;
    experience: number;
}

const LevelSection: React.FC<LevelSectionProps> = ({level, experience}) => {
    const theme = useTheme();

    return (
        <Paper sx={{p: 3, width: {xs: "100%", md: '48%'}, borderRadius: 2, boxShadow: 3}}>
            <Typography variant="h5" fontWeight="bold">{level} уровень</Typography>
            <Box sx={{width: '100%', mt: 2}}>
                <Box
                    sx={{
                        height: 10,
                        width: `${Math.min(experience, 100)}%`,
                        backgroundColor: theme.palette.secondary.light,
                        borderRadius: 5
                    }}
                />
            </Box>
            <Typography variant="h5" sx={{mt: 2}}>{experience} XP</Typography>
        </Paper>
    );
};

export default LevelSection;