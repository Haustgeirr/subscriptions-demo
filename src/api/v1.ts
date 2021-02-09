import express from 'express';

import plansRoutes from '../plans/routes';

const v1Router = express.Router();

v1Router.get('/', (req, res) => {
  return res.json({ message: 'Api v1' });
});

v1Router.use('/plans', plansRoutes);

export { v1Router };
