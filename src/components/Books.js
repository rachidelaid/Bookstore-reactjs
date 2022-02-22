import './Books.css';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import Form from './Form';

const Books = () => {
  const data = useSelector(({ booksReducer }) => booksReducer);

  return (
    <section className="books">
      {data.map((book) => (
        <BookCard
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          category={book.category}
        />
      ))}
      <Form />
    </section>
  );
};

export default Books;
