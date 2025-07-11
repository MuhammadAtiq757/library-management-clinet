import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetBookByIdQuery, useUpdateBookMutation } from '../redux/api/bookApi';

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}

const EditBook = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: book, isLoading } = useGetBookByIdQuery(id!);
  const [updateBook] = useUpdateBookMutation();

  const [form, setForm] = useState<Omit<Book, 'id' | 'available'>>({
    title: '',
    author: '',
    genre: '',
    isbn: '',
    description: '',
    copies: 0,
  });

  useEffect(() => {
    if (book) {
      setForm({
        title: book.title,
        author: book.author,
        genre: book.genre,
        isbn: book.isbn,
        description: book.description || '',
        copies: book.copies,
      });
    }
  }, [book]);

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
      await updateBook({ id: id!, body: form }).unwrap();
      navigate('/books');
    } catch (error) {
      console.error('Failed to update book:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  if (isLoading) {
    return <div className="text-center py-6 text-gray-600 text-lg">Loading book details...</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">✏️ Edit Book</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Book Title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Author Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
          <input
            name="genre"
            value={form.genre}
            onChange={handleChange}
            placeholder="Genre"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* ISBN */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ISBN</label>
          <input
            name="isbn"
            value={form.isbn}
            onChange={handleChange}
            placeholder="ISBN Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Short description"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Copies */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Copies</label>
          <input
            name="copies"
            type="number"
            min={0}
            value={form.copies}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-emerald-400 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          💾 Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
