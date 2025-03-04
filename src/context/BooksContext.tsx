import { createContext, Dispatch, SetStateAction } from "react";
import { Book } from "../types/Book.type";

interface Context {
  books: Book[];
  setBooks: Dispatch<SetStateAction<Book[]>>;
}

export const BooksContext = createContext<Context>({
  books: [],
  setBooks: () => {},
});
