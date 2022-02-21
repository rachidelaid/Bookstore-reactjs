import './Books.css';

import BookCard from './BookCard';

const Books = () => {
  const data = {};

  return (
    <section className="books">
      {Object.keys(data).map((key) => (
        <BookCard
          key={key}
          title={data[key][0].title}
          category={data[key][0].category}
        />
      ))}
    </section>
  );
};

export default Books;
