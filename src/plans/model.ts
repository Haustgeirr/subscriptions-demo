import mongoose from 'mongoose';

export type PlanDocument = mongoose.Document & {
  planCode: string;
  planName: string;
  costMonth: number;
  costYear: number;
};

const planSchema = new mongoose.Schema({
  planCode: { type: String, required: true, unique: true },
  planName: { type: String, required: true },
  costMonth: { type: Number, required: true },
  costYear: { type: Number, required: true },
});

export const Plan = mongoose.model<PlanDocument>('plans', planSchema);

// export interface PlanDocument extends Document {
//   planCode: string;
//   planName: string;
//   costMonth: number;
//   costYear: number;
// }

// const schema = new Schema({
//   planCode: { type: String, required: true, unique: true },
//   planName: { type: String, required: true },
//   costMonth: { type: Number, required: true },
//   costYear: { type: Number, required: true },
// });

// export const PlanModel = mongoose.model<IPlan>('plans', schema);
