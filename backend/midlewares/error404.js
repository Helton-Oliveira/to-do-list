const NotFound = require('../Errors/NotFound.js');

function error404(req, res, next) {
  const error = new NotFound();

  next(error);
}

module.exports = error404;
