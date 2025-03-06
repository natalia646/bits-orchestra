import { Book } from "../../types/Book.type";

const baseUrl = "http://localhost:3000/books";

type Arg = {
  id?: string;
  method?: string;
  body?: Book;
};

export const fetchData = ({method = "CET", id = '', body }: Arg) => {
  return fetch(`${baseUrl}${id}`, {
    method,
    body: JSON.stringify(body),
  }).then((data) => data.json());
};
