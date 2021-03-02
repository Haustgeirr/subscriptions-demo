import mongoose from 'mongoose';

import { isProduction } from './config';

const mongoURL = isProduction
  ? (process.env.MONGO_URI as string)
  : 'mongodb://localhost:27017/plans';

class PlansDatabase {
  private connection: string;

  constructor(connection: string) {
    this.connection = connection;
    try {
      mongoose.connect(connection);
    } catch (error) {
      console.log(error);
    }
  }
}

export { mongoURL, PlansDatabase };
