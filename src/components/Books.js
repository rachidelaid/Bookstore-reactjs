import './Books.css';

import BookCard from './BookCard';
import Form from './Form';

const Books = () => {
  const data = {};

  return (
    <section className="books">
      {Object.keys(data).map((key) => (
        <BookCard
          key={key}
          id={key}
          title={data[key][0].title}
          category={data[key][0].category}
        />
      ))}
      <Form />
    </section>
  );
};

export default Books;
