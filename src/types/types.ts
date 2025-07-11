export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}


export interface BorrowSummary {
  title: string;
  isbn: string;
  totalQuantityBorrowed: number;
}


export interface BorrowFormData {
  quantity: number;
  dueDate: string;
}


export interface BorrowSummaryItem {
  title: string;
  isbn: string;
  totalQuantityBorrowed: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}


