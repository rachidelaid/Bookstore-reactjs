import './Books.css';

import BookCard from './BookCard';

const Books = () => {
  const data = {
    item1: [
      {
        title: "The Handmaid's Tale",
        category: 'Fiction',
      },
    ],
    item2: [
      {
        title: 'Great Expectations',
        category: 'Classics',
      },
    ],
  };

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
