const express = require('express');
const routes = require('./Routes/index.js');

const app = express();

routes(app);


module.exports = app;