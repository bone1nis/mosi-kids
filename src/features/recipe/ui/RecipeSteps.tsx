import React from "react";
import { Box, Typography, Button } from "@mui/material";
import type { Recipe } from "../../../entities/recipe";

interface RecipeStepsProps {
    steps: Recipe["steps"];
    activeStep: number;
    onNext: () => void;
    onBack: () => void;
    onSubmit: () => void;
}

const RecipeSteps: React.FC<RecipeStepsProps> = ({ steps, activeStep, onNext, onBack, onSubmit }) => {
    const isLastStep = activeStep === steps.length + 1;
    const isIngredientStep = activeStep === 0;

    if (isLastStep) {
        return (
            <Box>
                <Typography variant="h5">Готово!</Typography>
                <Typography mb={2}>Ваше блюдо готово к подаче!</Typography>
                <Button variant="contained" onClick={onSubmit}>Вернуться к рецептам</Button>
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
                    <Box sx={{ mt: 2 }}>
                        <Button variant="outlined" onClick={onBack} sx={{ mr: 2 }}>Назад</Button>
                        <Button variant="contained" onClick={onNext}>
                            {activeStep === steps.length ? "Готово" : "Далее"}
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default RecipeSteps;