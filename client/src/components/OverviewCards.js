import React from "react";

const OverviewCards = ({ transactions = [] }) => {
  const totalIncome = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalExpense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-4 rounded shadow text-center">
        <h4 className="text-gray-500 uppercase text-sm">Balance</h4>
        <p className="text-2xl font-bold">{balance.toLocaleString("en-ZA", { style: "currency", currency: "ZAR" })}</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h4 className="text-gray-500 uppercase text-sm">Income</h4>
        <p className="text-green-600 text-xl font-semibold">{totalIncome.toLocaleString("en-ZA", { style: "currency", currency: "ZAR" })}</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h4 className="text-gray-500 uppercase text-sm">Expenses</h4>
        <p className="text-red-600 text-xl font-semibold">{totalExpense.toLocaleString("en-ZA", { style: "currency", currency: "ZAR" })}</p>
      </div>
    </div>
  );
};

export default OverviewCards;
