import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import type { Recipe } from "../../../entities/recipe";

interface IngredientListProps {
    ingredients: Recipe["ingredients"];
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {
    return (
        <Box>
            <Typography variant="h5">Состав ингредиентов:</Typography>
            <Grid container spacing={1} sx={{ mt: 2 }}>
                {ingredients.map((ingredient) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={ingredient}>
                        <Typography>- {ingredient}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default IngredientList;