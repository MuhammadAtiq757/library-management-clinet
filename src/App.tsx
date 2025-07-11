import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { store } from './redux/store';

// Pages
import Books from './pages/Books';
import EditBook from './pages/EditBook';
import BorrowBook from './pages/BorrowBook';
import BorrowSummary from './pages/BorrowSummary';
import CreateBookPage from './pages/CreateBook';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
        <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <Navbar />
       
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/books" element={<Books />} />
            <Route path="/create-book" element={<CreateBookPage />} />
            <Route path="/edit-book/:id" element={<EditBook />} />
            <Route path="/borrow/:bookId" element={<BorrowBook />} />
            <Route path="/borrow-summary" element={<BorrowSummary />} />
            <Route path="/" element={<Books />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;