import { TopDashboard } from "../components/TopDashboard/TopDashboard";
import { Table } from "../components/Table/Table";
import { useBookContext } from "../hooks/useBookContext";
import { useState } from "react";
import { Filter } from "../types/Filter.type";
import { filterBooks } from "../utils/filterBooks";

export const Dashboard = () => {
  const { books } = useBookContext();

  const [filterBy, setFilterBy] = useState<Filter>(Filter.Active);

  const filteredBooks = filterBooks(books, filterBy);
  const totalBooks = books.length;
  const filteredBooksNum = filteredBooks.length;

  return (
    <div>
      <TopDashboard
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        total={totalBooks}
        filtered={filteredBooksNum}
      />
      <Table books={filteredBooks} />
    </div>
  );
};
