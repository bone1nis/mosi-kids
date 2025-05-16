import { Container, Typography, Stack, Button } from "@mui/material";
import { useChallengeStore } from "../shared/store/challengeStore";
import backgroundGradient from "../features/challenge/assets/challenge-background.jpg";
import { useNavigate } from "react-router";
import ChallengeCard from "../features/challenge/ui/ChallengeCard";
import { useAuthStore } from "../shared/store/authStore";

const ChallengesPage: React.FC = () => {
    const navigate = useNavigate();
    const challenges = useChallengeStore((state) => state.challenges);
    const user = useAuthStore((state) => state.user);

    const challenge = challenges.find((c) => c.id === 1);

    if (!challenge) {
        return <Typography>Челлендж не найден.</Typography>;
    }

    const isCompleted = user?.challenges.includes(challenge.id);

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
                height: {xs: "94vh", sm: "90vh"},
            }}
        >
            <Typography variant="h1" fontWeight={900} mb={6} color="text.secondary">
                Челлендж дня
            </Typography>
            <Container maxWidth="md">
                <Stack spacing={2} alignItems="center" sx={{ mt: 4, minWidth: { xs: "100%", sm: 560 } }}>
                    <ChallengeCard challenge={challenge} minWidth={"100%"} disabled={isCompleted} />
                    <Button
                        variant="contained"
                        sx={{ minWidth: "100%" }}
                        onClick={() => navigate("/challenges/1")}
                        disabled={isCompleted}
                    >
                        {isCompleted ? "Челлендж завершен" : "Начать готовить"}
                    </Button>
                </Stack>
            </Container>
        </Stack>
    );
};

export default ChallengesPage;
