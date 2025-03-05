import { createContext } from "react";
import { Book } from "../types/Book.type";

interface Context {
  books: Book[];
  editBookId: string;
  setEditBookId: React.Dispatch<React.SetStateAction<string>>;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>
}

export const BooksContext = createContext<Context>({
  books: [],
  editBookId: "0",
  setEditBookId: () => {},
  setBooks: () => {},
});
