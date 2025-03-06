import { useBookContext } from "./useBookContext";
import { useNavigate } from "react-router";
import { dateOptions } from "../constants/constants";
import { createBook, updateBook } from "../api/client/client";
import { ToastStatus } from "../types/Toast.type";
import { PATH } from "../constants/path";
import { CreatedBook } from "../types/Book.type";

export const useSubmitForm = (
  values: CreatedBook,
  setInvalid: React.Dispatch<
    React.SetStateAction<{
      invalidTitle: boolean;
      invalidAuthor: boolean;
      invalidIsbn: boolean;
    }>
  >
) => {
  const { title, author, isbn, category } = values;
  const navigate = useNavigate();

  const { books, editBookId, setBooks, setEditBookId, setToast } =
    useBookContext();
  const bookToEdit = books.find((book) => book.id === editBookId) || null;

  return (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === "") {
      setInvalid((prev) => ({ ...prev, invalidTitle: true }));

      return;
    }

    if (author === "") {
      setInvalid((prev) => ({ ...prev, invalidAuthor: true }));

      return;
    }

    if (isbn === "") {
      setInvalid((prev) => ({ ...prev, invalidIsbn: true }));

      return;
    }

    if (bookToEdit?.id === editBookId) {
      const date = new Date();

      const updatedValue = {
        title,
        author,
        isbn,
        category,
        modifiedAt: date.toLocaleString("en-US", dateOptions),
      };

      updateBook(editBookId, updatedValue)
        .then((updatedBook) =>
          setBooks((prev) => {
            const books = prev.filter((book) => book.id !== editBookId);
            return [...books, updatedBook];
          })
        )
        .then(() =>
          setToast({
            status: ToastStatus.Success,
            message: "Book successfully updated",
          })
        )
        .catch(() =>
          setToast({
            status: ToastStatus.Error,
            message: "Can't update the book",
          })
        );
    } else {
      createBook({ title, author, category, isbn })
        .then((newBook) => setBooks((prev) => [...prev, newBook]))
        .then(() =>
          setToast({
            status: ToastStatus.Success,
            message: "Book successfully created",
          })
        )
        .catch(() =>
          setToast({
            status: ToastStatus.Error,
            message: "Can't create the book",
          })
        );
    }
    setEditBookId("0");
    navigate(PATH.Dashboard);
  };
};
