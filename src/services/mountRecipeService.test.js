import test from 'tape';
import mountRecipesJson from './mountRecipeService';
import Recipe from '../models/Recipe';

require('dotenv').config();

const expected = [
  new Recipe(
    'Guacamole Dip Recipe',
    ['avocado', 'onions', 'tomato'],
    'http://cookeatshare.com/recipes/guacamole-dip-2783',
    'https://media1.giphy.com/media/ydNtvvuHP2yA/giphy.gif',
  ),
  new Recipe(
    'Basic Guacamole Dip',
    ['avocado', 'lemon juice', 'onions', 'tomato'],
    'http://allrecipes.com/Recipe/Basic-Guacamole-Dip/Detail.aspx',
    'https://media0.giphy.com/media/EGqskn0TZoa4M/giphy.gif',
  ),
  new Recipe(
    'Best Salsa Recipe',
    ['avocado', 'green chilies', 'green chilies', 'onions', 'tomato', 'tomato sauce'],
    'http://cookeatshare.com/recipes/best-salsa-4377',
    'https://media1.giphy.com/media/ydNtvvuHP2yA/giphy.gif',
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

    expected.forEach((element) => {
      t.true(mountedResponseJson.recipes.some((result) => {
        return JSON.stringify(result) === JSON.stringify(element);
      }), 'Verifica se a receita está contida no array resultante.');
    });
  } catch (error) {
    console.log(error);
  }

  t.end();
});
