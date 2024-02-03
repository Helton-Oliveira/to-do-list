const express = require('express');
const usersRoutes = require('./usersRoutes.js');
const tasksRoutes = require('./tasksRoutes.js');
const categoryRoutes = require('./categoryRoutes.js');


const router = (app) => {

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    app.use(
        express.json(),
        express.urlencoded({ extended: true }),
        usersRoutes,
        tasksRoutes,
        categoryRoutes,
    )
};

module.exports = router;