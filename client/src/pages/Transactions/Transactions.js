import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../redux/slices/transactionSlice';

const Transactions = () => {
  const dispatch = useDispatch();
  const { transactions, loading, error } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div>
      <h2>Your Transactions</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ul>
        {transactions.map((txn) => (
          <li key={txn._id}>
            {txn.type.toUpperCase()} - {txn.amount} ({txn.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;