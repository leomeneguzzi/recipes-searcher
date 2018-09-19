import test from 'tape';
import recipePuppyHelper from './recipePuppyHelper';

const expected = [
  {
    title: '\nGuacamole Dip Recipe\n\n',
    href: 'http://cookeatshare.com/recipes/guacamole-dip-3094',
    ingredients: 'avocado, onions, salt, black pepper, tomato',
    thumbnail: 'http://img.recipepuppy.com/868476.jpg',
  },
  {
    title: 'Good Guacamole for Two',
    href: 'http://www.recipezaar.com/Good-Guacamole-for-Two-17315',
    ingredients: 'avocado, garlic powder, onions, onions, sea salt, tomato',
    thumbnail: 'http://img.recipepuppy.com/676917.jpg',
  },
  {
    title: 'Chunky Guacamole',
    href: 'http://www.recipezaar.com/Chunky-Guacamole-146242',
    ingredients: 'avocado, cilantro, onions, salt, tomato',
    thumbnail: 'http://img.recipepuppy.com/312492.jpg',
  },
];

const ingredients = [
  'avocado',
  'onions',
  'tomato',
];

test('Teste do metodo getRecipesByIngredients do recipePuppyHelper!', async (t) => {
  try {
    const recipesJson = await recipePuppyHelper.getRecipesByIngredients(
      ingredients,
    );

    expected.forEach((element) => {
      t.true(recipesJson.some(
        result => JSON.stringify(result) === JSON.stringify(element),
      ), 'Verifica se a receita está contida no array resultante.');
    });
  } catch (error) {
    console.log(error);
  }

  t.end();
});
