import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import type { Recipe } from "../../../entities/recipe";

interface IngredientListProps {
    ingredients: Recipe["ingredients"];
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {
    return (
        <Box>
            <Typography variant="h5" mb={2}>Состав ингредиентов:</Typography>
            <Grid container spacing={1}>
                <Grid size={12}>
                    <Box display="flex" gap={1}>
                        {ingredients.slice(0, 3).map((ingredient, index) => (
                            <Box
                                key={index}
                                sx={{
                                    backgroundColor: "#e0e0e0",
                                    padding: "4px 8px",
                                    borderRadius: "4px",
                                    flex: 1,
                                    textAlign: "center"
                                }}
                            >
                                {ingredient}
                            </Box>
                        ))}
                    </Box>
                </Grid>

                {ingredients.slice(3).map((ingredient, index) => (
                    <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                        <Box
                            sx={{
                                backgroundColor: "#f5f5f5",
                                padding: "4px 8px",
                                borderRadius: "4px",
                                textAlign: "center"
                            }}
                        >
                            {ingredient}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default IngredientList;