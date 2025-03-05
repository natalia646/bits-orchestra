export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  isbn: string;
  createdAt: string;
  modifiedAt: string;
  active: boolean;
}

export type CreatedBook = Pick<Book, "title" | "author" | "category" | "isbn">;

export type UpdatedBook = Omit<Book, "id" | "createdAt" | "active">;
