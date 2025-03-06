import { categories } from "../../constants/constants";

type Props = {
  category: string;
  setFielsd: React.Dispatch<
    React.SetStateAction<{
      title: string;
      author: string;
      isbn: string;
      category: string;
    }>
  >;
};

export const SelectCategory: React.FC<Props> = ({ category, setFielsd }) => {
  return (
    <label>
      Select category
      <select
        id="categoties"
        required
        value={category}
        onChange={(e) =>
          setFielsd((prev) => ({ ...prev, category: e.target.value }))
        }>
        {categories.map((categoryItem) => (
          <option key={categoryItem} value={categoryItem}>
            {categoryItem}
          </option>
        ))}
      </select>
    </label>
  );
};
