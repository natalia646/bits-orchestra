
// const path = "http://localhost:3000/books";

// export const read = async () => {
//   const books = readFile(path, "utf8", error);

//   return books;
// };


// export const readOne = async (id: string) => {
//   const books = await read();
//   const book = books.filter((book) => book.id === id);

//   return book;
// };

// export const write = async (books: Book[]) => {
//   const updatedBooks = await fs.writeFile(
//     path,
//     JSON.stringify(books, null, 2),
//     "utf8"
//   );

//   return updatedBooks;
// };

// export const remove = async (id: string) => {
//   const books = await read();

//   const newBooks = books.filter((book) => book.id !== id);

//   await write(newBooks);
// };

// export const active = async (id: string) => {
//   const books = await read();

//   const newBooks = books.filter((book) => book.id !== id);

//   await write(newBooks);
// };
