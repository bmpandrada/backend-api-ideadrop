import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cacaodelilioRoutes from "./routes/cacaodelilioRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

app.use("/api/cacaodelilio", cacaodelilioRoutes);

app.listen(PORT, () => {
  console.log(`Your are connected to ${PORT}`);
});
