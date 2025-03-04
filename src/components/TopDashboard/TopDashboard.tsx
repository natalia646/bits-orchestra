
import { Dropdown } from "../../types/Dropdown.type";


export const TopDashboard = () => {
  return (
    <section>
      <select name="" id="">
        {Object.entries(Dropdown).map(([key, value]) => (
          <option key={value}>Show {key}</option>
        ))}
      </select>
    </section>
  );
};
