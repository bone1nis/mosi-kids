import React, { useState } from "react";
import { Container, Typography, Stepper, Step, StepLabel, Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router";
import { IngredientList, RecipeSteps } from "../features/recipe";
import type { Recipe } from "../entities/recipe";

const mockRecipe: Recipe = {
    id: 1,
    title: "Омлет",
    level: 2,
    experience: 30,
    ingredients: ["Яйца", "Соль", "Молоко"],
    steps: [
        "Подготовьте ингредиенты",
        "Смешайте яйца с молоком и солью",
        "Обжарьте смесь на сковороде"
    ]
};

const RecipePage: React.FC = () => {

    const navigate = useNavigate();

    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up("sm"));

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleSubmit = () => {
        navigate("/recipes");
    };

    return (
        <Container>
            <Typography variant="h3" sx={{ mb: 3 }} align="center">{mockRecipe.title}</Typography>
            <Stepper activeStep={activeStep} sx={{ mb: 4 }} orientation={isBigScreen ? "horizontal" : "vertical"}>
                <Step><StepLabel>Состав ингредиентов</StepLabel></Step>
                {mockRecipe.steps.map((_, index) => (
                    <Step key={index}><StepLabel>Шаг {index + 1}</StepLabel></Step>
                ))}
                <Step><StepLabel>Готово</StepLabel></Step>
            </Stepper>

            {activeStep === 0 ? (
                <Box>
                    <IngredientList ingredients={mockRecipe.ingredients} />
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                        <Button variant="contained" onClick={handleNext}>Начать готовить</Button>
                    </Box>
                </Box>
            ) : (
                <RecipeSteps
                    steps={mockRecipe.steps}
                    onNext={handleNext}
                    onBack={handleBack}
                    activeStep={activeStep}
                    onSubmit={handleSubmit}
                />
            )}
        </Container>
    );
};

export default RecipePage;
