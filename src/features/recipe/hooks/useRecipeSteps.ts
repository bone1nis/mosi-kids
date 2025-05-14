import { useState } from "react";

export const useRecipeSteps = (totalSteps: number) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => setActiveStep((prev) => Math.min(prev + 1, totalSteps));
    const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));
    const resetSteps = () => setActiveStep(0);

    return { activeStep, handleNext, handleBack, resetSteps };
};