import express from 'express';

import SessionController from '@controllers/SessionController';

import auth from './middlewares/auth';

const routes = express.Router();
const sessionController = new SessionController();

routes.get('/session/login', sessionController.show);
routes.post('/session/register', sessionController.store);

export default routes;
