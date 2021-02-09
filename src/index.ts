import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { isProduction } from './config';

// v1 router
import { v1Router } from './api/v1';

// Connect to MongoDB
const mongoURI =
  process.env.NODE_ENV === 'production'
    ? (process.env.MONGO_URI as string)
    : 'mongodb://localhost:27017/plans';

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((err) => {
    console.log('MongoDB connection error: ' + err);
    process.exit(1);
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
