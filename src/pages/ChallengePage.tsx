import React, { useState, useEffect } from "react";
import { Container, Typography, Stepper, Step, StepLabel, Box, Button, useMediaQuery, useTheme, Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { IngredientList } from "../features/recipe";
import { useChallengeStore } from "../shared/store/challengeStore";
import ChallengeSteps from "../features/challenge/ui/ChallengeSteps";

const ChallengePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const recipeId = Number(id);

    const challenge = useChallengeStore(state => state.challenges.find(r => r.id === recipeId));

    const navigate = useNavigate();

    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up("sm"));

    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        setActiveStep(0);
    }, [recipeId]);

    if (!challenge) {
        return (
            <Container>
                <Typography variant="h5" align="center" sx={{ mt: 4 }}>
                    Челлендж не найден
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Button variant="contained" onClick={() => navigate("/challenges")}>
                        Вернуться к рецептам
                    </Button>
                </Box>
            </Container>
        );
    }

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleSubmit = () => {
        navigate("/challenges");
    };

    return (
        <Container>
            <Typography variant="h3" sx={{ mb: 3 }} align="center">{challenge.title}</Typography>
            <Stepper activeStep={activeStep} sx={{ mb: 4 }} orientation={isBigScreen ? "horizontal" : "vertical"}>
                <Step><StepLabel>Состав ингредиентов</StepLabel></Step>
                {challenge.steps.map((_, index) => (
                    <Step key={index}><StepLabel>Шаг {index + 1}</StepLabel></Step>
                ))}
                <Step><StepLabel>Готово</StepLabel></Step>
            </Stepper>

            {activeStep === 0 ? (
                <Box>
                    <IngredientList ingredients={challenge.ingredients} />
                    <Stack direction={"row"} justifyContent={"center"} mt={4}>
                        <Button variant="contained" onClick={handleNext}>Начать готовить</Button>
                    </Stack>
                </Box>
            ) : (
                <ChallengeSteps
                    challengeId={challenge.id}
                    steps={challenge.steps}
                    onNext={handleNext}
                    onBack={handleBack}
                    activeStep={activeStep}
                    onSubmit={handleSubmit}
                />
            )}
        </Container>
    );
};

export default ChallengePage;