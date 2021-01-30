import mongoose, { Schema } from "mongoose";

const planSchema = new Schema({
  planCode: String,
  planName: String,
  costMonth: Number,
  costYear: Number,
});

const Plan = mongoose.model("plans", planSchema);
