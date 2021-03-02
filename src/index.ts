import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { isProduction } from './config';
import { mongoURL } from './database';

// v1 router
import { v1Router } from './api/v1';

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((err) => {
    console.log('MongoDB connection error: ' + err);
    // process.exit(1);
  });

// Create Express server
const app = express();

// Configure Express
const origin = {
  origin: isProduction ? 'http://localhost:3000' : '*',
};

app.use(cors(origin));
app.use('/api/v1', v1Router);

// Set up listener
const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.info(`Server: Listening on port ${PORT}`);
});
