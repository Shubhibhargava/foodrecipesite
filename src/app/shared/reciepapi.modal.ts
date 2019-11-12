import { RecipeDetail } from './recipedetail.modal';

export interface RecipeApi {
    items: RecipeDetail[];
    total_count: number;
  }