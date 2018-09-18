import { get } from 'axios';

function getResponseByIngredients(ingredients) {
  const recipeUrl = `http://www.recipepuppy.com/api/?i=${ingredients.join(',')}`;
  return get(recipeUrl);
}

async function getRecipesByIngredients(ingredients) {
  const recipesResponse = await getResponseByIngredients(ingredients);
  return recipesResponse.data.results;
}

const recipePuppyHelper = {
  getRecipesByIngredients,
};

export default recipePuppyHelper;
