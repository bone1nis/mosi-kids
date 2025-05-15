import React, { useState, useEffect } from "react";
import { Container, Typography, Stepper, Step, StepLabel, Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { IngredientList, RecipeSteps } from "../features/recipe";
import { useRecipeStore } from "../shared/store/recipeStore";

const RecipePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const recipeId = Number(id);

    const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeId));

    const navigate = useNavigate();

    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up("sm"));

    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        setActiveStep(0);
    }, [recipeId]);

    if (!recipe) {
        return (
            <Container>
                <Typography variant="h5" align="center" sx={{ mt: 4 }}>
                    Рецепт не найден
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Button variant="contained" onClick={() => navigate("/recipes")}>
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
        navigate("/recipes");
    };

    return (
        <Container>
            <Typography variant="h3" sx={{ mb: 3 }} align="center">{recipe.title}</Typography>
            <Stepper activeStep={activeStep} sx={{ mb: 4 }} orientation={isBigScreen ? "horizontal" : "vertical"}>
                <Step><StepLabel>Состав ингредиентов</StepLabel></Step>
                {recipe.steps.map((_, index) => (
                    <Step key={index}><StepLabel>Шаг {index + 1}</StepLabel></Step>
                ))}
                <Step><StepLabel>Готово</StepLabel></Step>
            </Stepper>

            {activeStep === 0 ? (
                <Box>
                    <IngredientList ingredients={recipe.ingredients} />
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                        <Button variant="contained" onClick={handleNext}>Начать готовить</Button>
                    </Box>
                </Box>
            ) : (
                <RecipeSteps
                    steps={recipe.steps}
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
