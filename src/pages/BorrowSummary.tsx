import { useGetBorrowSummaryQuery } from '../redux/api/bookApi';

interface BorrowSummaryItem {
  title: string;
  isbn: string;
  totalQuantityBorrowed: number;
}

const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowSummaryQuery();
  const summary: BorrowSummaryItem[] = data ?? [];

  if (isLoading) {
    return (
      <div className="text-center text-lg font-medium text-gray-600 py-6">
        Loading borrow summary...
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto mt-10 text-nowrap">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📚 Borrow Summary</h1>
      {summary.length === 0 ? (
        <div className="bg-yellow-50 text-yellow-800 px-4 py-3 rounded-md shadow-sm">
          No books have been borrowed yet.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200 bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700 uppercase">Book Title</th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700 uppercase">ISBN</th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700 uppercase">Total Borrowed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {summary.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-6 py-4 text-sm text-gray-800">{item.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{item.isbn}</td>
                  <td className="px-6 py-4 text-sm text-blue-700 font-semibold">{item.totalQuantityBorrowed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BorrowSummary;
