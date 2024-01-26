const express = require('express');
const routes = require('./Routes/index.js');
const errorHandler = require('./midlewares/handlersErrors.js');
const error404 = require('./midlewares/error404.js');

const app = express();

routes(app);

app.use(error404);

app.use(errorHandler);

module.exports = app;