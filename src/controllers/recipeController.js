import errs from 'restify-errors';
import mountRecipesJson from '../services/mountRecipeService';

async function response(req, res, next) {
  const ingredients = req.query.i.split(',');

  if (req.query.i.split(',').length > 3) {
    res.send(
      new errs.InvalidArgumentError(
        'Quantidade máxima de ingredientes permitido é 3!',
      ),
    );
    return next();
  }

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
