import { get } from 'axios';

function getResponseBySearch(stringToSearch) {
  const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API}&q=${stringToSearch}&limit=1&offset=0&rating=G&lang=en`;
  return get(giphyUrl);
}

async function getFirstOriginalGifBySearch(stringToSearch) {
  const gifResponse = await getResponseBySearch(stringToSearch);
  return gifResponse.data.data[0].images.original;
}

const giphyHelper = {
  getFirstOriginalGifBySearch,
};

export default giphyHelper;
