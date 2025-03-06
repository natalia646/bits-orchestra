import { createContext } from "react";
import { Book } from "../types/Book.type";
import { ToastStatus } from "../types/Toast.type";

interface Context {
  books: Book[];
  editBookId: string;
  toast: { status: ToastStatus; message: string };
  setEditBookId: React.Dispatch<React.SetStateAction<string>>;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  setToast: React.Dispatch<
    React.SetStateAction<{
      status: ToastStatus;
      message: string;
    }>
  >;
}

export const BooksContext = createContext<Context>({
  books: [],
  editBookId: "0",
  toast: { status: ToastStatus.Default, message: "" },
  setEditBookId: () => {},
  setBooks: () => {},
  setToast: () => {},
});
