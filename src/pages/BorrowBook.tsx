import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useBorrowBookMutation, useGetBookByIdQuery } from '../redux/api/bookApi';
import type { BorrowFormData } from '../types/types';

const BorrowBook = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();

  const { data: book, isLoading, isError } = useGetBookByIdQuery(bookId!);
  const [borrowBook] = useBorrowBookMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BorrowFormData>({
    defaultValues: {
      quantity: 1,
      dueDate: '',
    },
  });

  const onSubmit = async (formData: BorrowFormData) => {
    if (!book) {
      alert('Failed to load book details.');
      return;
    }

    if (formData.quantity > book.copies) {
      alert(`Cannot borrow more than ${book.copies} available`);
      return;
    }

    const payload = {
      book: book._id,
      quantity: formData.quantity,
      dueDate: new Date(formData.dueDate).toISOString(),
    };

    try {
      await borrowBook(payload).unwrap();
      navigate('/borrow-summary');
    } catch (error) {
      console.error('Error borrowing book:', error);
      alert('An error occurred while borrowing the book. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <div className="text-center text-lg font-medium text-gray-600 py-6">
        Loading book details...
      </div>
    );
  }

  if (isError || !book) {
    return (
      <div className="text-center text-red-600 font-medium py-6">
        Book not found or failed to load.
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">📖 Borrow Book</h1>
      <p className="text-sm text-gray-600 mb-4">
        <span className="font-medium">Title:</span> {book.title}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Quantity */}
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            max={book.copies}
            placeholder="Enter quantity"
            className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            {...register('quantity', {
              required: 'Quantity is required',
              min: 1,
              max: {
                value: book.copies,
                message: `Cannot borrow more than ${book.copies} copies`,
              },
              valueAsNumber: true,
            })}
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
          )}
        </div>

        {/* Due Date */}
        <div>
          <label
            htmlFor="dueDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Due Date
          </label>
          <input
            id="dueDate"
            type="date"
            className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            {...register('dueDate', {
              required: 'Due date is required',
            })}
          />
          {errors.dueDate && (
            <p className="text-red-500 text-sm mt-1">{errors.dueDate.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2.5 px-4 text-white bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
        >
          ✅ Borrow Book
        </button>
      </form>
    </div>
  );
};

export default BorrowBook;
