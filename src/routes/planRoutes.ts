import { Express, Request, Response } from "express";
import mongoose from "mongoose";
var cors = require("cors");

const Plan = mongoose.model("plans");

const corsOptions = {
  origin: "http://localhost:3000",
};

module.exports = (app: Express) => {
  app.get(
    "/api/plans",
    cors(corsOptions),
    async (req: Request, res: Response) => {
      const all = await Plan.find({});
      if (all) res.send(all);
      else res.status(404).send({ error: "Not Found" });
    }
  );
};
