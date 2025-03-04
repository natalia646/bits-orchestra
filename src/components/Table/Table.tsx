import { columns } from "../../constants/constants";
import { Book } from "../../types/Book.type";
import { BookRow } from "../Book/Book";

type Props = {
  books: Book[];
};

export const Table: React.FC<Props> = ({ books }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} scope="col">{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
          <BookRow key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
};
