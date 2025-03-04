import { Dropdown } from "../../types/Dropdown.type";

type Props = {
  filterBy: Dropdown;
  setFilterBy: React.Dispatch<React.SetStateAction<Dropdown>>;
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
          onChange={(e) => setFilterBy(e.target.value as Dropdown)}>
          {Object.keys(Dropdown).map((key) => (
            <option value={key} key={key}>
              Show {key}
            </option>
          ))}
        </select>
        {filterBy !== Dropdown.All && `Showing ${filtered} of ${total}`}
      </label>
    </section>
  );
};
