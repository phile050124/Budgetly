import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, addCategory, deleteCategory } from '../../redux/slices/categorySlice';

const Categories = () => {
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState('');
  const { categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleAdd = () => {
    if (newCategory) {
      dispatch(addCategory({ name: newCategory }));
      setNewCategory('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <div>
      <h2>Manage Categories</h2>
      <input
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="New category"
      />
      <button onClick={handleAdd}>Add</button>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ul>
        {categories.map((cat) => (
          <li key={cat._id}>
            {cat.name} <button onClick={() => handleDelete(cat._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;