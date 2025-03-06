import { dateOptions } from "../../constants/constants";
import { Book, CreatedBook, UpdatedBook } from "../../types/Book.type";
import { v4 as uuidv4 } from "uuid";
import { fetchData } from "../service/service";


export const getAll = (): Promise<Book[]> => {
  return fetchData({});
};

export const getOne = (id: string): Promise<Book> => {
  return fetchData({ id: `/${id}` });
};

export const create = (createdBook: CreatedBook) => {
  const { title, author, category, isbn } = createdBook;
  const date = new Date();

  const newBook: Book = {
    id: uuidv4(),
    title,
    author,
    category,
    isbn,
    createdAt: date.toLocaleString("en-US", dateOptions),
    modifiedAt: "--",
    active: true,
  };

  return fetchData({ method: "POST", body: newBook });
};

export const update = async (id: string, updatedValue: UpdatedBook) => {
  const bookToUpdate = await getOne(id);
  const updatedBook = Object.assign(bookToUpdate, updatedValue);

  return fetchData({ id: `/${id}`, method: "PUT", body: updatedBook });
};

export const updatePart = async (id: string) => {
  const bookToUpdate = await getOne(id);
  bookToUpdate.active = !bookToUpdate.active;

  return fetchData({ id: `/${id}`, method: "PATCH", body: bookToUpdate });
};

export const remove = async (id: string) => {
  return fetchData({ id: `/${id}`, method: "DELETE" });
};
