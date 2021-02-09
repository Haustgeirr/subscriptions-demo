import { Model } from 'mongoose';

import { PlanDocument } from './model';

export default class PlanRepository {
  private database;

  constructor(database: Model<PlanDocument>) {
    this.database = database;
  }

  findAll() {
    return new Promise((resolve, reject) => {
      const data = this.database.find();
      resolve(data);
    });
  }
}
