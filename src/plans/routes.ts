import express from 'express';

import { plansController } from './controller';

const planRoutes = express.Router();
planRoutes.get('/', plansController);

export default planRoutes;
