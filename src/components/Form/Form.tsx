import { useEffect, useState } from "react";
import { categories } from "../../constants/constants";
import { useBookContext } from "../../hooks/useBookContext";
import { useNavigate } from "react-router";
import { PATH } from "../../constants/path";
import * as client from "../../api/client/client";
import s from './Form.module.scss'

export const Form = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [category, setCategory] = useState("");


  const { books, setBooks, editBookId, setEditBookId } = useBookContext();
  const bookToEdit = books.find((book) => book.id === editBookId) || null;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (bookToEdit?.id === editBookId) {
      const updatedValue = {
        title,
        author,
        isbn,
        category,
        modifiedAt: "4",
      };

      client.update(editBookId, updatedValue).then((updatedBook) =>
        setBooks((prev) => {
          const books = prev.filter((book) => book.id !== editBookId);
          return [...books, updatedBook];
        })
      );
    } else {
      client
        .create({ title, author, category, isbn })
        .then((newBook) => setBooks((prev) => [...prev, newBook]));
    }
    setEditBookId("0");
    navigate(PATH.Dashboard);
  };

  useEffect(() => {
    if (editBookId !== "0") {
      if (bookToEdit) {
        setTitle(bookToEdit.title);
        setAuthor(bookToEdit.author);
        setIsbn(bookToEdit.isbn);
        setCategory(bookToEdit.category);
      }
    }
  }, [bookToEdit, books, editBookId]);

  return (
    <>
      <form action="" onSubmit={onSubmit} className={s.form}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />
        <select
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          {categories.map((categoryItem) => (
            <option key={categoryItem} value={categoryItem}>
              {categoryItem}
            </option>
          ))}
        </select>
        <button type="submit">
          {editBookId !== "0" ? "Edit a Book" : "Add a book"}
        </button>
      </form>
    </>
  );
};
