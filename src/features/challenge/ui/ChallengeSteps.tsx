import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useAuthStore } from "../../../shared/store/authStore";
import type { Challenge } from "../../../entities/challenge";

interface ChallengeStepsProps {
    steps: Challenge["steps"];
    activeStep: number;
    onNext: () => void;
    onBack: () => void;
    onSubmit: () => void;
    challengeId: number;
}

const ChallengeSteps: React.FC<ChallengeStepsProps> = ({ steps, activeStep, onNext, onBack, onSubmit, challengeId }) => {
    const addChallenge = useAuthStore((state) => state.addChallenge);

    const handleComplete = () => {
        addChallenge(challengeId);
        onSubmit();
    };

    const isLastStep = activeStep === steps.length + 1;
    const isIngredientStep = activeStep === 0;

    if (isLastStep) {
        return (
            <Box>
                <Typography variant="h5">Готово!</Typography>
                <Typography mb={2}>Ваше блюдо готово к подаче!</Typography>
                <Stack sx={{ mt: 2 }} direction={"row"} justifyContent={"center"}>
                    <Button variant="contained" onClick={handleComplete}>Вернуться к челленджам</Button>
                </Stack>
            </Box>
        );
    }

    return (
        <Box>
            {isIngredientStep ? (
                <Box>
                    <Typography variant="h5">Состав ингредиентов:</Typography>
                    <Button variant="contained" onClick={onNext}>Начать готовить</Button>
                </Box>
            ) : (
                <>
                    <Typography variant="h5">Шаг {activeStep}:</Typography>
                    <Typography>{steps[activeStep - 1]}</Typography>
                    <Stack sx={{ mt: 2 }} direction={"row"} justifyContent={"center"}>
                        <Button variant="outlined" onClick={onBack} sx={{ mr: 2 }}>Назад</Button>
                        <Button variant="contained" onClick={onNext}>
                            {activeStep === steps.length ? "Готово" : "Далее"}
                        </Button>
                    </Stack>
                </>
            )}
        </Box>
    );
};

export default ChallengeSteps;