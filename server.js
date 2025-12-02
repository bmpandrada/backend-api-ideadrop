import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/cacaodelio", (req, res) => {
  const data = [
    { id: 1, product: "cacao bar premium" },
    { id: 2, product: "cacao bar premium" },
  ];

  res.json(data);
});

app.post("/api/cacaodelio", (req, res) => {
  const { product } = req.body;

  res.send(product);
});

app.listen(PORT, () => {
  console.log(`You are connected to port ${PORT}`);
});
