import express, { Request, Response } from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;

require("./models/plan");

const mongoURI =
  process.env.NODE_ENV === "production"
    ? (process.env.MONGO_URI as string)
    : "mongodb://localhost:27017/subscribe";

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.error("MongoDB connection error: " + err);
      process.exit(1);
    }
  }
);

app.get("/", (req: Request, res: Response) => {
  res.send("Backend");
});

require("./routes/planRoutes")(app);

app.listen(PORT, () => {
  console.info(`Ready on port ${PORT}`);
});
