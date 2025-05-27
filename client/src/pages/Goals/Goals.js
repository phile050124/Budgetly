import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoals } from '../../redux/slices/goalSlice';

const Goals = () => {
  const dispatch = useDispatch();
  const { goals, loading, error } = useSelector((state) => state.goals);

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div>
      <h2>Financial Goals</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ul>
        {goals.map((goal) => (
          <li key={goal._id}>
            {goal.title} - Target: {goal.amount} - Progress: {goal.progress}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;