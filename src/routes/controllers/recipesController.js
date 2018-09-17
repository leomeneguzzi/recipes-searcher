import { get } from 'axios';

function getGif(recipeTitle) {
  return get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API}&q=${recipeTitle}&limit=1&offset=0&rating=G&lang=en`);
}

async function mountRecipe(recipe) {
  const gifResponse = await getGif(recipe.title.trim());
  return {
    title: recipe.title.trim(),
    ingredients: recipe.ingredients.split(',').map(item => item.trim()).sort(),
    link: recipe.href,
    gif: gifResponse.data.data[0].images.original.url,
  };
}

async function mountRecipes(recipes) {
  const mountedRecipes = await Promise.all(
    recipes.map(async recipe => mountRecipe(recipe)),
  );
  return mountedRecipes;
}

async function mountResponseJson(keywords, recipes) {
  return {
    keywords: keywords.sort(),
    recipes: await mountRecipes(recipes),
  };
}

function getRecipes(ingredients) {
  return get(`http://www.recipepuppy.com/api/?i=${ingredients.join(',')}`);
}

async function response(req, res, next) {
  const ingredients = req.query.i.split(',');

  try {
    const recipesResponse = await getRecipes(ingredients);
    const mountedResponseJson = await mountResponseJson(ingredients, recipesResponse.data.results);
    res.send(mountedResponseJson);
    return next();
  } catch (err) {
    return next(err);
  }
}

export default response;
