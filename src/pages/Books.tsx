import { Link } from 'react-router-dom';
import BookTable from '../components/BookTable';
import { useDeleteBookMutation, useGetBooksQuery } from '../redux/api/bookApi';

const Books = () => {
  const { data: books = [], isLoading } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Books</h1>
      <Link to="/create-book" className="bg-emerald-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Add New Book
      </Link>
      <BookTable books={books} onDelete={deleteBook} />
    </div>
  );
};

export default Books;