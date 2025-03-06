import { CreatedBook } from "../types/Book.type";

type Valid = {
  invalidTitle: boolean;
  invalidAuthor: boolean;
  invalidIsbn: boolean;
};

export const getInputs = (
  { title, author, isbn }: Omit<CreatedBook, "category">,
  { invalidTitle, invalidAuthor, invalidIsbn }: Valid
) => {
  return [
    {
      type: "text",
      placeholder: "The Great Gatsby",
      value: title,
      label: "Book title",
      field: "title",
      invalidKey: "invalidTitle",
      isValid: invalidTitle,
    },
    {
      type: "text",
      placeholder: "F. Scott Fitzgerald",
      value: author,
      label: "Author",
      field: "author",
      invalidKey: "invalidAuthor",
      isValid: invalidAuthor,
    },
    {
      type: "number",
      placeholder: "9780743273565",
      value: isbn,
      label: "ISBN",
      field: "isbn",
      invalidKey: "invalidIsbn",
      isValid: invalidIsbn,
    },
  ];
};
