import { Container, Typography, Stack, Button } from "@mui/material";
import { RecipeCard } from "../features/recipe";
import { useChallengeStore } from "../shared/store/challengeStore";
import backgroundGradient from "../features/challenge/assets/challenge-background.jpg"
import { useNavigate } from "react-router";

const ChallengePage: React.FC = () => {
    const navigate = useNavigate();

    const challenges = useChallengeStore((state) => state.challenges);

    const challenge = challenges.find((c) => c.id === 1);

    if (!challenge) {
        return <Typography>Челлендж не найден.</Typography>;
    }

    return (
        <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
                backgroundImage: `url(${backgroundGradient})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "94vh"
            }}>
            <Typography variant="h1" fontWeight={900} mb={6} color="text.secondary">Челендж дня</Typography>
            <Container maxWidth="md">

                <Stack spacing={2} alignItems="center" sx={{ mt: 4, minWidth: { xs: "100%", sm: 560 } }}>
                    <RecipeCard recipe={challenge} minWidth={"100%"} />
                    <Button variant="contained" sx={{ minWidth: "100%" }} onClick={() => navigate("/recipes/1")}>Начать готовить</Button>
                </Stack>
            </Container>
        </Stack>
    );
};

export default ChallengePage;