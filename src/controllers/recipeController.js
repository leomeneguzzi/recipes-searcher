import mountRecipesJson from '../services/mountRecipeService';

async function response(req, res, next) {
  const ingredients = req.query.i.split(',');

  try {
    const mountedResponseJson = await mountRecipesJson(
      ingredients,
    );
    res.send(mountedResponseJson);
    return next();
  } catch (err) {
    return next(err);
  }
}

export default response;
