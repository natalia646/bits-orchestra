import { dateOptions } from "../../constants/constants";
import { Book, CreatedBook, UpdatedBook } from "../../types/Book.type";
import { v4 as uuidv4 } from "uuid";
// import { fetchData } from "../service/service";

const baseUrl = "http://localhost:3000/books";

export const getAll = (): Promise<Book[]> => {
  // return fetchData({});
  return fetch(baseUrl).then((data) => data.json());
};

export const getOne = (id: string): Promise<Book> => {
  return fetch(`${baseUrl}/${id}`).then((data) => data.json());
  //   return fetchData({ id: `/${id}` });
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

  return fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(newBook),
  }).then((data) => data.json());

  //   return fetchData({ method: "POST", body: newBook });
};

export const update = async (id: string, updatedValue: UpdatedBook) => {
  const bookToUpdate = await getOne(id);
  const updatedBook = Object.assign(bookToUpdate, updatedValue);

  return fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedBook),
  }).then((data) => data.json());
  //   return fetchData({ id: `/${id}`, method: "PUT", body: updatedBook });
};

export const updatePart = async (id: string) => {
  const bookToUpdate = await getOne(id);
  bookToUpdate.active = !bookToUpdate.active;

  return fetch(`${baseUrl}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(bookToUpdate),
  }).then((data) => data.json());
  //   return fetchData({ id: `/${id}`, method: "PATCH", body: bookToUpdate });
};

export const remove = async (id: string) => {
  return fetch(`${baseUrl}/${id}`, { method: "DELETE" }).then((data) =>
    data.json()
  );
  //   return fetchData({ id: `/${id}`, method: "DELETE" });
};
