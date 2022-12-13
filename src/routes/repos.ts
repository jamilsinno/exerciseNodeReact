import { Router, Request, Response } from 'express';
import { repoController } from '../controllers/repos';

export const repos = Router();

repos.get('/', repoController);
