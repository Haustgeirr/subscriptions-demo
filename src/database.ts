import mongoose from 'mongoose';

const mongoURL =
  process.env.NODE_ENV === 'production'
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
