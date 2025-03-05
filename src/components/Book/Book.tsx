import { useNavigate } from "react-router";
import { Book } from "../../types/Book.type";
import { Action } from "../ActionButton/Action";
import { PATH } from "../../constants/path";
import { useBookContext } from "../../hooks/useBookContext";
import { remove, updatePart } from "../../api/client/client";

type Props = {
  book: Book;
};

export const BookRow: React.FC<Props> = ({ book }) => {
  const navigate = useNavigate();
  
  const { setEditBookId, setBooks } = useBookContext();
  const { id, title, author, category, isbn, createdAt, modifiedAt, active } =
    book;

  const editBook = (id: string) => {
    navigate(PATH.AddBook);
    setEditBookId(id);
  };

  const deleteBook = async (id: string) => {
    await remove(id);

    setBooks((prevBooks) => {
      const filtered = prevBooks.filter((book) => book.id !== id);
      return [...filtered];
    });
  };

  const deactivateBook = async (id: string) => {
    const updatedBook = await updatePart(id);

    setBooks((prevBooks) => {
      const filtered = prevBooks.filter((book) => book.id !== id);
      return [...filtered, updatedBook]
    });
  };

  return (
    <tr key={id}>
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
