import { Book } from "../types/Book.type";
import { Filter } from "../types/Filter.type";

export const filterBooks = (books: Book[], filterBy: Filter) => {
  return books.filter((book) => {
    switch (filterBy) {
      case Filter.Active:
        return book.active;
      case Filter.Deactivated:
        return !book.active;
      default:
        return book;
    }
  });
};
