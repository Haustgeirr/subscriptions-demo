import express from 'express';
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
    console.log(mongoURL);
    // process.exit(1);
  });

// Create Express server
const app = express();

// Configure Express
const origin = {
  // origin: isProduction ? 'http://localhost:3000' : '*',
  origin: '*',
};
app.use(cors(origin));

// Routes
app.use('/api/v1', v1Router);

if (isProduction) {
  app.use(express.static('frontend/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// Set up listener
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.info(`Server: Listening on port ${PORT}`);
});
