import { useEffect, useState } from "react";
import { Book } from "../types/Book.type";
import { BooksContext } from "./BooksContext";

type Props = {
  children: React.ReactNode;
};


export const BooksProvider: React.FC<Props> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((data) => data.json())
      .then(setBooks);
  }, []);

  return (
    <BooksContext.Provider value={{books, setBooks}}>{children}</BooksContext.Provider>
  );
};
export { BooksContext };

