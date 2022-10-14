import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import categoryRoutes from "./routes/route.js";

dotenv.config({ path: "./config.env" });
const app = express();
// Use middleware
app.use(cors());
app.use(express.json());

// Using routes
app.use("/api", categoryRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
