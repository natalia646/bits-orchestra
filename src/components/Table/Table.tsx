import { columns } from "../../constants/constants";
import { Book } from "../../types/Book.type";
import { BookRow } from "../Book/Book";
import s from "./Table.module.scss";

type Props = {
  books: Book[];
};

export const Table: React.FC<Props> = ({ books }) => {
  return (
    <table className={s.table}>
      <thead className={s.table__head}>
        <tr>
          {columns.map((column) => (
            <th className={s.table__column} key={column} scope="col">
              {column}
            </th>
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
