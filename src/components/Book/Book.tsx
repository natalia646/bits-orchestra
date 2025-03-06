/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router";
import { Book } from "../../types/Book.type";
import { Action } from "../ActionButton/Action";
import { PATH } from "../../constants/path";
import { useBookContext } from "../../hooks/useBookContext";
import { remove, updatePart } from "../../api/client/client";
import s from "./Book.module.scss";
import { ToastStatus } from "../../types/Toast.type";

type Props = {
  book: Book;
};

export const BookRow: React.FC<Props> = ({ book }) => {
  const navigate = useNavigate();

  const { setEditBookId, setBooks, setToast } = useBookContext();
  const { id, title, author, category, isbn, createdAt, modifiedAt, active } =
    book;

  const editBook = (id: string) => {
    navigate(PATH.AddBook);
    setEditBookId(id);
  };

  const deleteBook = async (id: string) => {
    try {
      await remove(id);

      setBooks((prevBooks) => {
        const filtered = prevBooks.filter((book) => book.id !== id);
        return [...filtered];
      });

      setToast({
        status: ToastStatus.Success,
        message: "Book successfully deleted",
      });
    } catch (err) {
      setToast({
        status: ToastStatus.Error,
        message: "Can't delete the book.",
      });
    }
  };

  const deactivateBook = async (id: string) => {
    try {
      const updatedBook = await updatePart(id);

      setBooks((prevBooks) => {
        const filtered = prevBooks.filter((book) => book.id !== id);
        return [...filtered, updatedBook];
      });

      setToast({
        status: ToastStatus.Success,
        message: "Book status successfully changed",
      });
    } catch (err) {
      setToast({
        status: ToastStatus.Error,
        message: "Can't changed status",
      });
    }
  };

  return (
    <tr key={id} className={`${s.row} ${active ? "" : s.deactived}`}>
      <td>{title}</td>
      <td>{author}</td>
      <td>{category}</td>
      <td>{isbn}</td>
      <td>{createdAt}</td>
      <td>{modifiedAt}</td>

      <td>
        <Action button={"Edit"} onClick={() => editBook(id)} />
        <Action button={"Delete"} onClick={() => deleteBook(id)} />
        <Action
          button={active ? "Deactivate" : "Re-Activate"}
          onClick={() => deactivateBook(id)}
        />
      </td>
    </tr>
  );
};
