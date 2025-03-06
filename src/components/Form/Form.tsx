import { useEffect, useState } from "react";
import { categories } from "../../constants/constants";
import { useBookContext } from "../../hooks/useBookContext";
import { Input } from "./Input";
import style from "./Form.module.scss";
import { useSubmitForm } from "../../hooks/useSubmitForm";
import { getInputs } from "../../utils/getInputs";

export const Form = () => {
  const { books, editBookId } = useBookContext();
  const bookToEdit = books.find((book) => book.id === editBookId) || null;

  const [{ title, author, isbn, category }, setFielsd] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
  });

  const [{ invalidTitle, invalidAuthor, invalidIsbn }, setInvalid] = useState({
    invalidTitle: false,
    invalidAuthor: false,
    invalidIsbn: false,
  });

  const onSubmit = useSubmitForm({ title, author, isbn, category }, setInvalid);

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

  const handleChange = (field: string, invalidKey: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFielsd((prev) => ({ ...prev, [field]: e.target.value }));
    setInvalid((prev) => ({ ...prev, [invalidKey]: false }));
  };

  const inputs = getInputs(
    { title, author, isbn },
    { invalidTitle, invalidAuthor, invalidIsbn }
  );

  return (
    <>
      <form onSubmit={onSubmit} className={style.form}>
        {inputs.map(
          ({ type, placeholder, value, label, invalidKey, field, isValid }) => (
            <Input
              key={placeholder}
              type={type}
              placeholder={placeholder}
              value={value}
              label={label}
              isValid={isValid}
              onChange={handleChange(field, invalidKey)}
            />
          )
        )}

        <label>
          Select category
          <select
            id="categoties"
            required
            value={category}
            onChange={(e) =>
              setFielsd((prev) => ({ ...prev, category: e.target.value }))
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
