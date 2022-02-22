import './Form.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        title,
        category,
      }),
    );

    setTitle('');
    setCategory('');
  };

  return (
    <section className="form" onSubmit={handleSubmit}>
      <h3>ADD NEW BOOK</h3>
      <form>
        <input
          type="text"
          placeholder="Book title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled selected>
            Category
          </option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="horror">Horror</option>
          <option value="fiction">Fiction</option>
          <option value="classics">Classics</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default Form;
