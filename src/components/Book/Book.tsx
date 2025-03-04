import { buttons } from "../../constants/constants";
import { Book } from "../../types/Book.type";
import { Action } from "../ActionButton/Action";

type Props = {
  book: Book;
};

export const BookRow: React.FC<Props> = ({ book }) => {
  const { id, title, author, category, isbn, createdAt, modifiedAt } = book;

  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{author}</td>
      <td>{category}</td>
      <td>{isbn}</td>
      <td>{createdAt}</td>
      <td>{modifiedAt}</td>

      <td>
        {buttons.map((button) => (
          <Action key={button.action} button={button.action} bookId={id} onClick={button.click} />
        ))}
      </td>
    </tr>
  );
};
