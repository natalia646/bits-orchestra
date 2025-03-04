import { Filter } from "../../types/Filter.type";

type Props = {
  filterBy: Filter;
  setFilterBy: React.Dispatch<React.SetStateAction<Filter>>;
  total: number;
  filtered: number;
};

export const TopDashboard: React.FC<Props> = ({
  filterBy,
  setFilterBy,
  total,
  filtered,
}) => {
  return (
    <section>
      <label>
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value as Filter)}>
          {Object.keys(Filter).map((key) => (
            <option value={key} key={key}>
              Show {key}
            </option>
          ))}
        </select>
        Showing {filtered} of {total}
      </label>
    </section>
  );
};
