export interface Recipe {
    id: number;
    title: string;
    description: string;
    lvl: number;
    experience: number;
    ingredients: string[];
    steps: string[];
}