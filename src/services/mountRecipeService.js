import giphyHelper from '../helpers/giphyHelper';
import recipePuppyHelper from '../helpers/recipePuppyHelper';
import Recipe from '../models/Recipe';

async function mountRecipe(title, ingredients, href) {
  const gifResponse = await giphyHelper.getFirstOriginalGifBySearch(title.trim());
  return new Recipe(
    title.trim(),
    ingredients.map(item => item.trim()).sort(),
    href,
    gifResponse.url,
  );
}

async function mountRecipes(recipes) {
  const mountedRecipes = await Promise.all(
    recipes.map(async recipe => mountRecipe(
      recipe.title,
      recipe.ingredients.split(','),
      recipe.href,
    )),
  );
  return mountedRecipes;
}

async function mountRecipesJson(ingredients) {
  const recipesResponse = await recipePuppyHelper.getRecipesByIngredients(
    ingredients,
  );
  return {
    keywords: ingredients.sort(),
    recipes: await mountRecipes(recipesResponse),
  };
}

export default mountRecipesJson;
