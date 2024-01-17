const express = require('express');
const usersRoutes = require('./usersRoutes.js');
const tasksRoutes = require('./tasksRoutes.js');


const router = (app) => {
    app.route('/').get((req, res) => {
       res.status(200).send('API Rota Base');
    })

    app.use(express.json(),
        usersRoutes,
        tasksRoutes,
    )
};

module.exports = router;