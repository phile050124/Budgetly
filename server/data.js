// Simulate data storage

let transactions = [
  { id: 1, description: "Coffee at Starbucks", amount: -5.5, date: new Date(Date.now() - 2 * 3600 * 1000) }, // 2 hours ago
  { id: 2, description: "Freelance payment", amount: 750.0, date: new Date(Date.now() - 24 * 3600 * 1000) },
  { id: 3, description: "Netflix subscription", amount: -15.99, date: new Date(Date.now() - 48 * 3600 * 1000) },
];

let goals = [
  { id: 1, name: "Emergency Fund", target: 1000, progress: 600 },
];

module.exports = { transactions, goals };
