import { Request, Response } from 'express';
import data from '../../data/repos.json';

export const repoController = async (_req: Request, res: Response) => {
    // filter out the repositories that have a false fork key
    const result = data.filter( d => !d.fork);
    res.header('Cache-control', 'no-store');

    // TODO: See README.md Task (A). Return repo data here. You’ve got this!
    res.status(200).json(result)
}