import PropTypes from 'prop-types';
import './BookCard.css';

const BookCard = ({ title, category }) => (
  <div className="card">
    <div className="details">
      <span className="category">{category}</span>
      <h3 className="title">{title}</h3>
      <p className="author">suzane collns</p>
      <div className="actions">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="progress">
      <svg className="svg" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="42" strokeDasharray="264 0" />
        <circle
          className="bar"
          cx="50"
          cy="50"
          r="42"
          strokeDasharray="134 130"
        />
      </svg>
      <div className="count">
        <p>50%</p>
        <span>Completed</span>
      </div>
    </div>
    <div className="chapter">
      <span>CURRENT CHAPTER</span>
      <p>Chapter 7</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookCard;
