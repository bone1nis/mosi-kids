import { Container, Typography, Stack, Divider, Paper, useMediaQuery, useTheme } from "@mui/material";
import { ChallengeTimer } from "../features/challenge";
import { RecipeCard } from "../features/recipe";
import { useChallengeStore } from "../shared/store/challengeStore";

const ChallengePage: React.FC = () => {
    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up("sm"));

    const challenges = useChallengeStore((state) => state.challenges);

    const challenge = challenges.find((c) => c.id === 1);

    if (!challenge) {
        return <Typography>Челлендж не найден.</Typography>;
    }

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                <Stack spacing={2} alignItems="center" textAlign="center">
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        {challenge.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {challenge.description}
                    </Typography>
                    <Divider sx={{ my: 3, width: "80%" }} />
                    <ChallengeTimer initialTime={24 * 60 * 60} />
                </Stack>
            </Paper>

            <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
                <RecipeCard recipe={challenge} minWidth={isBigScreen ? 400 : "100%"} />
            </Stack>
        </Container>
    );
};

export default ChallengePage;