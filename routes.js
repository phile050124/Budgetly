const express = require("express");
const router = express.Router();
const { transactions, goals } = require("../../server/data");

// Get all transactions
router.get("/transactions", (req, res) => {
  res.json(transactions);
});

// Add new transaction
router.post("/transactions", (req, res) => {
  const { description, amount } = req.body;
  if (!description || typeof amount !== "number") {
    return res.status(400).json({ error: "Invalid data" });
  }
  const newTransaction = {
    id: transactions.length + 1,
    description,
    amount,
    date: new Date(),
  };
  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
});

// Get goals
router.get("/goals", (req, res) => {
  res.json(goals);
});

// Update goal progress
router.put("/goals/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { progress } = req.body;
  const goal = goals.find(g => g.id === id);
  if (!goal) return res.status(404).json({ error: "Goal not found" });
  if (typeof progress !== "number") return res.status(400).json({ error: "Invalid progress" });
  goal.progress = progress;
  res.json(goal);
});

module.exports = router;
