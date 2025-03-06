import { useContext } from "react";
import { BooksContext } from "../context/BooksProvider";

export const useBookContext = () => {
  return useContext(BooksContext);
};
