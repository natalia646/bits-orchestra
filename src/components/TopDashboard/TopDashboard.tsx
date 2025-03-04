import { Link } from "react-router";
import { Dropdown } from "../../types/Dropdown.type";
import { PATH } from "../../constants/path";

export const TopDashboard = () => {
  return (
    <section>
      <Link to={PATH.AddBook}>Add a Book</Link>
      <select name="" id="">
        {Object.entries(Dropdown).map(([key, value]) => (
          <option key={value}>Show {key}</option>
        ))}
      </select>
    </section>
  );
};
