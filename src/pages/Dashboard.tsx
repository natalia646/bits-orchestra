import { Table } from "../components/Table/Table";
import { useBookContext } from "../hooks/useBookContext";

export const Dashboard = () => {
  const { books } = useBookContext();

  return (
    <div>
      <Table books={books} />
    </div>
  );
};
