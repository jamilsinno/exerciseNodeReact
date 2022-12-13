import { Request, Response } from 'express';

export const repoController = async (_req: Request, res: Response) => {
    res.header('Cache-control', 'no-store');
    // TODO: See README.md Task (A). Return repo data here. You’ve got this!
    res.status(200).json([])
}