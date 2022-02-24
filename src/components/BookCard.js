import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './BookCard.css';

const BookCard = ({ id, title, category }) => {
  const dispatch = useDispatch();
  const [percentage, setPercentage] = useState(Math.floor(Math.random() * 90));

  const increasePerc = () => {
    if (percentage < 100) {
      setPercentage(percentage + 10 <= 100 ? percentage + 10 : 100);
    }
  };

  const handleRemove = () => {
    fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VFbcOva4gydD84rw77of/books/${id}`,
      {
        method: 'DELETE',
      },
    );

    dispatch(removeBook({ id }));
  };

  const dropIn = {
    hidden: {
      x: '150vh',
    },
    visible: {
      x: '0',
      transition: {
        duration: 0.2,
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      x: '-150vh',
    },
  };

  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="card"
    >
      <div className="details">
        <span className="category">{category}</span>
        <h3 className="title">{title.split(' , ')[0]}</h3>
        <p className="author">{title.split(' , ')[1]}</p>
        <div className="actions">
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemove}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <svg className="svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" strokeDasharray="264 0" />
          <circle
            className="bar"
            cx="50"
            cy="50"
            r="42"
            strokeDasharray={`${percentage * 2.64} ${
              (100 - percentage) * 2.64
            }`}
          />
        </svg>
        <div className="count">
          <p>{`${percentage}%`}</p>
          <span>Completed</span>
        </div>
      </div>
      <div className="chapter">
        <span>CURRENT CHAPTER</span>
        <p>Chapter 7</p>
        <button type="button" onClick={increasePerc}>
          UPDATE PROGRESS
        </button>
      </div>
    </motion.div>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookCard;
