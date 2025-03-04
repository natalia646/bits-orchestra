import { TopDashboard } from "../components/TopDashboard/TopDashboard";
import { Table } from "../components/Table/Table";
import { useBookContext } from "../hooks/useBookContext";

export const Dashboard = () => {
  const { books } = useBookContext();

  return (
    <div>
      <TopDashboard/>
      <Table books={books} />
    </div>
  );
};
