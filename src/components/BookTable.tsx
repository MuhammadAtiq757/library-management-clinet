import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDeleteBookMutation } from '../redux/api/bookApi';

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
}

interface BookTableProps {
  books: Book[];
}

const BookTable = ({ books }: BookTableProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteBook] = useDeleteBookMutation();

  const handleDeleteClick = (id: string) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (selectedId) {
      await deleteBook(selectedId);
      setShowModal(false);
      setSelectedId(null);
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
    setSelectedId(null);
  };

  return (
    <>
      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200 bg-white text-nowrap">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Author</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Genre</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">ISBN</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Copies</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Available</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {books.map((book) => (
              <tr key={book._id} className="hover:bg-gray-50 transition duration-200">
                <td className="px-6 py-4 text-sm text-gray-800">{book.title}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{book.author}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{book.genre}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{book.isbn}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{book.copies}</td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      book.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {book.available ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <Link
                    to={`/edit-book/${book._id}`}
                    className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 rounded"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/borrow/${book._id}`}
                    className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 hover:bg-purple-200 rounded"
                  >
                    Borrow
                  </Link>
                  <button
                    onClick={() => handleDeleteClick(book._id)}
                    className="inline-block px-3 py-1 text-xs font-medium bg-red-100 text-red-700 hover:bg-red-200 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blur bg-opacity-80">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete this book?</h2>
          
            <div className="flex justify-end space-x-2">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookTable;
