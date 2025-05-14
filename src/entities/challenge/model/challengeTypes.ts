import type { Recipe } from "../../recipe";

export interface Challenge {
    id: number;
    title: string;
    description?: string;
    recipe: Recipe;
}