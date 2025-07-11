
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetBookByIdQuery } from '../redux/api/bookApi';

const BookDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading } = useGetBookByIdQuery(id!);

  if (isLoading) {
    return <div>Loading book details...</div>;
  }

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>

      <div className="space-y-3 text-gray-700">
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Genre:</strong> {book.genre}
        </p>
        <p>
          <strong>ISBN:</strong> {book.isbn}
        </p>
        <p>
          <strong>Copies Available:</strong> {book.copies}
        </p>
        <p>
          <strong>Status:</strong>{' '}
          <span
            className={`font-semibold ${
              book.available ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {book.available ? 'Available' : 'Unavailable'}
          </span>
        </p>
        {book.description && (
          <p className="mt-4">
            <strong>Description:</strong> {book.description}
          </p>
        )}
      </div>

      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => window.history.back()}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <Link
          to={`/edit-book/${book.id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Edit Book
        </Link>
        <Link
          to={`/borrow/${book.id}`}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Borrow Book
        </Link>
      </div>
    </div>
  );
};

export default BookDetailsPage;