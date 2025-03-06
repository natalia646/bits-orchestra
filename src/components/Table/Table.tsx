import { columns } from "../../constants/constants";
import { Book } from "../../types/Book.type";
import { BookRow } from "../Book/Book";
import style from "./Table.module.scss";

type Props = {
  books: Book[];
};

export const Table: React.FC<Props> = ({ books }) => {
  return (
    <section className={style.wrapper}>
      <table className={style.table}>
        <thead className={style.table__head}>
          <tr>
            {columns.map((column) => (
              <th className={style.table__column} key={column} scope="col">
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
    </section>
  );
};
