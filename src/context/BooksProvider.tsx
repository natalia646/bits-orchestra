import { useEffect, useState } from "react";
import { Book } from "../types/Book.type";
import { BooksContext } from "./BooksContext";
import { getAll } from "../api/client/client";

type Props = {
  children: React.ReactNode;
};

export const BooksProvider: React.FC<Props> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [editBookId, setEditBookId] = useState("0");

  useEffect(() => {
    getAll().then(setBooks);
  }, []);

  return (
    <BooksContext.Provider
      value={{ books, editBookId, setEditBookId, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
export { BooksContext };
