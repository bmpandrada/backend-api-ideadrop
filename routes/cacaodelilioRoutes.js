import express from "express";

const router = express();

router.get("/", (req, res) => {
  const data = [
    { id: 1, name: "mike" },
    { id: 1, name: "bruce" },
  ];

  res.json(data);
});

router.post("/", (req, res) => {
  const { name } = req.body;
  res.json(name);
});

export default router;
