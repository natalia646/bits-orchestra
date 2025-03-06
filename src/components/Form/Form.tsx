import { useEffect, useState } from "react";
import { categories, dateOptions } from "../../constants/constants";
import { useBookContext } from "../../hooks/useBookContext";
import { useNavigate } from "react-router";
import { PATH } from "../../constants/path";
import { create, update } from "../../api/client/client";
import s from "./Form.module.scss";
import { ToastStatus } from "../../types/Toast.type";
import { Input } from "./Input";

export const Form = () => {
  const navigate = useNavigate();
  const [{ invalidTitle, invalidAuthor, invalidIsbn }, setInvalid] = useState({
    invalidTitle: false,
    invalidAuthor: false,
    invalidIsbn: false,
  });

  const [{ title, author, isbn, category }, setFielsd] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
  });

  const { books, editBookId, setBooks, setEditBookId, setToast } =
    useBookContext();
  const bookToEdit = books.find((book) => book.id === editBookId) || null;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === "") {
      setInvalid((prev) => ({ ...prev, invalidTitle: true }));

      return;
    }

    if (author === "") {
      setInvalid((prev) => ({ ...prev, invalidAuthor: true }));

      return;
    }

    if (isbn === "") {
      setInvalid((prev) => ({ ...prev, invalidIsbn: true }));

      return;
    }

    if (bookToEdit?.id === editBookId) {
      const date = new Date();

      const updatedValue = {
        title,
        author,
        isbn,
        category,
        modifiedAt: date.toLocaleString("en-US", dateOptions),
      };

      update(editBookId, updatedValue)
        .then((updatedBook) =>
          setBooks((prev) => {
            const books = prev.filter((book) => book.id !== editBookId);
            return [...books, updatedBook];
          })
        )
        .then(() =>
          setToast({
            status: ToastStatus.Success,
            message: "Book successfully updated",
          })
        )
        .catch(() =>
          setToast({
            status: ToastStatus.Error,
            message: "Can't update the book",
          })
        );
    } else {
      create({ title, author, category, isbn })
        .then((newBook) => setBooks((prev) => [...prev, newBook]))
        .then(() =>
          setToast({
            status: ToastStatus.Success,
            message: "Book successfully created",
          })
        )
        .catch(() =>
          setToast({
            status: ToastStatus.Error,
            message: "Can't create the book",
          })
        );
    }
    setEditBookId("0");
    navigate(PATH.Dashboard);
  };

  useEffect(() => {
    if (editBookId !== "0") {
      if (bookToEdit) {
        setFielsd({
          title: bookToEdit.title,
          author: bookToEdit.author,
          isbn: bookToEdit.isbn,
          category: bookToEdit.category,
        });
      }
    }
  }, [bookToEdit, books, editBookId]);

  return (
    <>
      <form action="" onSubmit={onSubmit} className={s.form}>
        <Input
          type={"text"}
          placeholder={"The Great Gatsby"}
          value={title}
          label={"Book title"}
          isValid={invalidTitle}
          onChange={(e) => {
            setFielsd((prev) => ({ ...prev, title: e.target.value }));
            setInvalid((prev) => ({ ...prev, invalidTitle: false }));
          }}
        />
        <Input
          type={"text"}
          placeholder={"F. Scott Fitzgerald"}
          value={author}
          label={"Author"}
          isValid={invalidAuthor}
          onChange={(e) => {
            setFielsd((prev) => ({ ...prev, author: e.target.value }));
            setInvalid((prev) => ({ ...prev, invalidAuthor: false }));
          }}
        />
        <Input
          type={"number"}
          placeholder={"9780743273565"}
          value={isbn}
          label={"ISBN"}
          isValid={invalidIsbn}
          onChange={(e) => {
            setFielsd((prev) => ({ ...prev, isbn: e.target.value }));
            setInvalid((prev) => ({ ...prev, invalidIsbn: false }))
          }}
        />

        <label>
          Select category
          <select
            id="categoties"
            required
            value={category}
            onChange={(e) =>
              setFielsd((prev) => ({ ...prev, title: e.target.value }))
            }>
            {categories.map((categoryItem) => (
              <option key={categoryItem} value={categoryItem}>
                {categoryItem}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">
          {editBookId !== "0" ? "Edit a Book" : "Add a book"}
        </button>
      </form>
    </>
  );
};
