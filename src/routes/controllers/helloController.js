function response(req, res, next) {
  res.send(`hello ${req.params.name}`);
  next(new Error('boom!'));
}

export default response;
