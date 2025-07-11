import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddBookMutation } from '../redux/api/bookApi';

const CreateBookPage = () => {
  const navigate = useNavigate();
  const [addBook] = useAddBookMutation();
  const [form, setForm] = useState({
    title: '',
    author: '',
    genre: '',
    isbn: '',
    description: '',
    copies: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === 'copies' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addBook(form).unwrap();
      navigate('/books');
    } catch (error) {
      console.error('Failed to create book:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📚 Add New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            name="title"
            placeholder="Book Title"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            name="author"
            placeholder="Author Name"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block text-sm font-medium mb-1">Genre</label>
          <input
            name="genre"
            placeholder="Genre (e.g. Fiction)"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* ISBN */}
        <div>
          <label className="block text-sm font-medium mb-1">ISBN</label>
          <input
            name="isbn"
            placeholder="ISBN Number"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Brief description of the book"
            rows={3}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Copies */}
        <div>
          <label className="block text-sm font-medium mb-1">Number of Copies</label>
          <input
            name="copies"
            type="number"
            min={0}
            placeholder="0"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
        >
          ➕ Create Book
        </button>
      </form>
    </div>
  );
};

export default CreateBookPage;
