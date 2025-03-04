import { Book } from "../types/Book.type";
import { Dropdown } from "../types/Dropdown.type";

export const filterBooks = (books: Book[], filterBy: Dropdown) => {
  return books.filter((book) => {
    switch (filterBy) {
      case Dropdown.Active:
        return book.active;
      case Dropdown.Deactivated:
        return !book.active;
      default:
        return book;
    }
  });
};
