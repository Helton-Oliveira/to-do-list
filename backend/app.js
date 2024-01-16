import express from 'express';
import routes from './Routes/index.js';

const app = express();

routes(app);


export default app;