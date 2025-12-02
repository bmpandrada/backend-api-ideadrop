import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const data = [
    {
      id: 1,
      product: "cacadelio bar",
    },
  ];
  res.json(data);
});

router.post("/", (req, res) => {
  const { product } = req.body;
  res.json(product);
});

export default router;
