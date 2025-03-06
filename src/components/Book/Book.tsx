/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router";
import { Book } from "../../types/Book.type";
import { ActionButton } from "../ActionButton/ActionButton";
import { PATH } from "../../constants/path";
import { useBookContext } from "../../hooks/useBookContext";
import { removeBook, updatePart } from "../../api/client/client";
import style from "./Book.module.scss";
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
      await removeBook(id);

      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));

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

      setBooks((prevBooks) => [
        ...prevBooks.filter((book) => book.id !== id),
        updatedBook,
      ]);

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

  const rows = [title, author, category, isbn, createdAt, modifiedAt];
  const actions = [
    { label: "Edit", action: () => editBook(id) },
    { label: "Delete", action: () => deleteBook(id) },
    {
      label: active ? "Deactivate" : "Re-Activate",
      action: () => deactivateBook(id),
    },
  ];

  return (
    <tr key={id} className={`${style.row} ${active ? "" : style.deactived}`}>
      {rows.map((row) => (
        <td>{row}</td>
      ))}

      <td>
        {actions.map(({ label, action }) => (
          <ActionButton key={label} button={label} onClick={action} />
        ))}
      </td>
    </tr>
  );
};
