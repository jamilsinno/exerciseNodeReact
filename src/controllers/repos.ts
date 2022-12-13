import { Request, Response } from 'express';

export const repoController = async (_req: Request, res: Response) => {
    res.header('Cache-control', 'no-store');
    res.status(200).json([])
}