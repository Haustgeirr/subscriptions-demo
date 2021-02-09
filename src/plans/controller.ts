// NO IMPORTS
import { Request, Response } from 'express';
import { Plan } from './model';
import PlanRepository from './repository';

export const plansController = (req: Request, res: Response) => {
  const repository = new PlanRepository(Plan);

  repository
    .findAll()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
};
