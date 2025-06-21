import React, { useState } from "react";

const TransactionList = ({ transactions = [], setTransactions = () => {} }) => {

  const [form, setForm] = useState({
    type: "income",
    amount: "",
    category: "",
    date: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      ...form,
      amount: parseFloat(form.amount),
    };

    setTransactions([...transactions, newTransaction]);

    // Clear form
    setForm({
      type: "income",
      amount: "",
      category: "",
      date: "",
      notes: "",
    });
  };

  const handleDelete = (id) => {
    const updated = transactions.filter((tx) => tx.id !== id);
    setTransactions(updated);
  };

  return (
    <div className="bg-white p-6 rounded shadow space-y-6">
      <h2 className="text-xl font-bold text-gray-700">Add New Transaction</h2>

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Notes"
          className="md:col-span-2 p-2 border rounded"
        />
        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Transaction
        </button>
      </form>

      <h3 className="text-lg font-semibold mt-8 text-gray-700">Transaction History</h3>
      <ul className="divide-y divide-gray-200">
        {transactions.map((tx) => (
          <li key={tx.id} className="py-3 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-800">
                {tx.category || "Uncategorized"} — {tx.type}
              </p>
              <p className="text-xs text-gray-500">
                {tx.date} | {tx.notes}
              </p>
            </div>
            <div className="text-right">
              <span
                className={`text-sm font-bold ${
                  tx.type === "income" ? "text-green-600" : "text-red-600"
                }`}
              >
                R{tx.amount.toFixed(2)}
              </span>
              <button
                onClick={() => handleDelete(tx.id)}
                className="ml-4 text-sm text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
