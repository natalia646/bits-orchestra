import { useEffect, useState } from "react";
import { Book } from "../types/Book.type";
import { BooksContext } from "./BooksContext";
import { getAll } from "../api/client/client";
import { ToastStatus } from "../types/Toast.type";

type Props = {
  children: React.ReactNode;
};

export const BooksProvider: React.FC<Props> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [editBookId, setEditBookId] = useState("0");
  const [toast, setToast] = useState({
    status: ToastStatus.Default,
    message: "",
  });

  useEffect(() => {
    getAll().then(setBooks);
  }, []);

  return (
    <BooksContext.Provider
      value={{ books, editBookId, toast, setEditBookId, setBooks, setToast }}>
      {children}
    </BooksContext.Provider>
  );
};
export { BooksContext };
