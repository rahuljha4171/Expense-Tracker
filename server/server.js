import express from "express";
import cors from "cors";

const app = express();

const PORT = 5000;

// Use middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
