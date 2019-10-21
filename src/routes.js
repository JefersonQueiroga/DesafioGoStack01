import { Router } from 'express';
import ProjectController from './app/controllers/ProjectController';
import {middlwareCheckProjectExists } from './app/controllers/ProjectController';
const routes = new Router();

routes.post('/projects',ProjectController.store);
routes.post('/projects/:id/tasks',ProjectController.addTask);
routes.get('/projects',ProjectController.list);
routes.put('/projects/:id',middlwareCheckProjectExists,ProjectController.update);
routes.delete('/projects/:id',ProjectController.delete);
export default routes;