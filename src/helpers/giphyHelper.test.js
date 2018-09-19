import test from 'tape';
import giphyHelper from './giphyHelper';

require('dotenv').config();

const expected = '1iTItUOuJLsbev28';

test('Teste do metodo getFirstOriginalGifBySearch do giphyHelper!', async (t) => {
  try {
    const giphyJson = await giphyHelper.getFirstOriginalGifBySearch(
      'dogo',
    );

    t.assert(giphyJson.url.includes(expected),
      'Verifica se possui o ID do GIF na url');
  } catch (error) {
    console.log(error);
  }

  t.end();
});
