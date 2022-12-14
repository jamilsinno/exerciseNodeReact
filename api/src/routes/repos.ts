import { Router } from 'express';
import { repoController } from '../controllers/repos';
import { singleRepoController } from '../controllers/repo';

export const repos = Router();

repos.get('/', repoController);
repos.get('/:id', singleRepoController);
