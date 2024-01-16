import express from 'express';
import usersRoutes from './usersRoutes.js';
import tasksRoutes from './tasksRoutes.js';


const router = (app) => {
    app.route('/').get((req, res) => {
       res.status(200).send('API Rota Base');
    })

    app.use(express.json(),
        usersRoutes,
        tasksRoutes,
    )
};

 export default router;