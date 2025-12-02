import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

app.get("/api/cacaodelio", (req, res) => {
  const data = [
    {
      id: 1,
      product: "cacadelio bar",
    },
  ];
  res.json(data);
});

app.post("/api/cacaodelio", (req, res) => {
  const { product } = req.body;
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Your are connected to ${PORT}`);
});
