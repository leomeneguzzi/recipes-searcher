import test from 'tape';
import mountRecipesJson from './mountRecipeService';
import Recipe from '../models/Recipe';

require('dotenv').config();

const recipesExpected = [
  new Recipe(
    'Guacamole Dip Recipe',
    ['avocado', 'onions', 'tomato'],
    'http://cookeatshare.com/recipes/guacamole-dip-2783',
    'ydNtvvuHP2yA',
  ),
  new Recipe(
    'Basic Guacamole Dip',
    ['avocado', 'lemon juice', 'onions', 'tomato'],
    'http://allrecipes.com/Recipe/Basic-Guacamole-Dip/Detail.aspx',
    'EGqskn0TZoa4M',
  ),
  new Recipe(
    'Best Salsa Recipe',
    ['avocado', 'green chilies', 'green chilies', 'onions', 'tomato', 'tomato sauce'],
    'http://cookeatshare.com/recipes/best-salsa-4377',
    'ydNtvvuHP2yA',
  ),
];

const ingredients = [
  'avocado',
  'onions',
  'tomato',
];

test('Teste completo do servico mountRecipeService!', async (t) => {
  try {
    const mountedResponseJson = await mountRecipesJson(
      ingredients,
    );

    t.assert(
      JSON.stringify(mountedResponseJson.keywords) === JSON.stringify(ingredients),
      'Valida se as keywords estão corretas.',
    );
    recipesExpected.forEach(
      element => t.true(mountedResponseJson.recipes.some(
        result => result.title === element.title
          && result.link === element.link
          && result.gif.includes(element.gif)
          && JSON.stringify(result.ingredients) === JSON.stringify(element.ingredients),
      ), 'Verifica se a receita está contida no array resultante.'),
    );
  } catch (error) {
    console.log(error);
  }

  t.end();
});
