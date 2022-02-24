import './Form.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  const data = useSelector(({ booksReducer }) => booksReducer);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {
      item_id: `book_${
        data
          .map((b) => +b.item_id.split('_')[1])
          .sort()
          .reverse()[0] + 1 || 1
      }`,
      title: `${title.trim()} , ${author.trim()}`,
      category,
    };

    fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VFbcOva4gydD84rw77of/books',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      },
    );

    dispatch(addBook(book));

    setTitle('');
    setCategory('');
    setAuthor('');
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
        <input
          type="text"
          placeholder="Author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            Category
          </option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Dystopian">Dystopian</option>
          <option value="Adventure">Adventure</option>
          <option value="Romance">Romance</option>
          <option value="Detective & Mystery">Detective & Mystery</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default Form;
