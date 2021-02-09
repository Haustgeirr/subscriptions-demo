import mongoose from 'mongoose';

const mongoURI =
  process.env.NODE_ENV === 'production'
    ? (process.env.MONGO_URI as string)
    : 'mongodb://localhost:27017/plans';

// const database = async () => {
//   try {
//     await mongoose.connect(mongoURI);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default database;

export default class PlansDatabase {
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
