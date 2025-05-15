import React from "react";
import { Container, Grid } from "@mui/material";
import RecipeCard from "../features/recipe/ui/RecipeCard";
import { useRecipeStore } from "../shared/store/recipeStore";
import { useAuthStore } from "../shared/store/authStore";

const RecipesPage: React.FC = () => {
    const recipes = useRecipeStore((state) => state.recipes);
    const user = useAuthStore((state) => state.user!);
    const sortedRecipes = [...recipes].sort((a, b) => {
        const isAAvailable = user.lvl >= a.lvl && !user.dishes.includes(a.id);
        const isBAvailable = user.lvl >= b.lvl && !user.dishes.includes(b.id);
        return Number(isBAvailable) - Number(isAAvailable);
    });

    return (
        <Container>
            <Grid container spacing={4}>
                {sortedRecipes.map((recipe) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={recipe.id}>
                        <RecipeCard
                            disabled={user.lvl < recipe.lvl || user.dishes.includes(recipe.id)}
                            recipe={recipe}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default RecipesPage;