const express = require('express');
const usersRoutes = require('./usersRoutes.js');
const tasksRoutes = require('./tasksRoutes.js');
const categoryRoutes = require('./categoryRoutes.js');


const router = (app) => {
    app.use(
        express.json(),
        usersRoutes,
        tasksRoutes,
        categoryRoutes,
    )
};

module.exports = router;