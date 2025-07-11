import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import type { Book, BorrowSummary } from '../../types/types';


export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://library-management-blush-xi.vercel.app/api' }),
  tagTypes: ['Books', 'Borrow'],
  endpoints: (builder) => ({

    getBooks: builder.query<Book[], void>({
      query: () => '/books',
      transformResponse: (response: { data: Book[] }) => {
        return response.data.map((book) => ({
          ...book,
          id: book._id,
          available: book.copies > 0,
        }));
      },
      providesTags: ['Books'],
    }),

    getBookById: builder.query<Book, string>({
      query: (id) => `/books/${id}`,
      transformResponse: (response: { success: boolean; data: Book }) => response.data,
      providesTags: (_, __, id) => [{ type: 'Books', id }],
    }),


    addBook: builder.mutation<void, Partial<Book>>({
      query: (body) => ({
        url: '/books',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Books'],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success('Book added successfully!');
        } catch {
          toast.error('Failed to add book.');
        }
      },
    }),

    updateBook: builder.mutation<void, { id: string; body: Partial<Book> }>({
      query: ({ id, body }) => ({
        url: `/books/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Books'],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success('Book updated successfully!');
        } catch {
          toast.error('Failed to update book.');
        }
      },
    }),

    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success('Book deleted successfully!');
        } catch {
          toast.error('Failed to delete book.');
        }
      },
    }),

    borrowBook: builder.mutation<void, { book: string; quantity: number; dueDate: string }>({
      query: (body) => ({
        url: '/borrow',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Borrow', 'Books'],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success('Book borrowed successfully!');
        } catch {
          toast.error('Failed to borrow book.');
        }
      },
    }),

    getBorrowSummary: builder.query<BorrowSummary[], void>({
      query: () => '/borrow',
      transformResponse: (response: {
        success: boolean;
        message: string;
        data: {
          totalQuantity: number;
          book: {
            title: string;
            isbn: string;
          };
        }[];
      }) => {
        return response.data.map((item) => ({
          title: item.book.title,
          isbn: item.book.isbn,
          totalQuantityBorrowed: item.totalQuantity,
        }));
      },
      providesTags: ['Borrow'],
    }),

  }),
});


export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
} = bookApi;