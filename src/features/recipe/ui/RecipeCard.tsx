import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import type { Recipe } from "../../../entities/recipe";
import recipeIcon from "../assets/recipe-icon.svg";

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipes/${recipe.id}`);
    };

    return (
        <Card
            sx={{ minWidth: 280, maxWidth: 600, padding: 3, cursor: "pointer" }}
            onClick={handleClick}
        >
            <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                    <Typography>{recipe.title}</Typography>
                    <Typography>Уровень: {recipe.level}</Typography>
                    <Typography>XP: {recipe.experience}</Typography>
                </Box>
                <img
                    src={recipeIcon}
                    alt="Иконка рецепта"
                    height="100%"
                    style={{ objectFit: 'contain' }}
                />
            </Stack>
        </Card>
    );
};

export default RecipeCard;