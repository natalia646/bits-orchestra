import { Link, useLocation } from "react-router";
import { PATH } from "../../constants/path";

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === PATH.AddBook ? (
        <Link to={PATH.Dashboard}>Dashboard</Link>
      ) : (
        <Link to={PATH.AddBook}>Add a Book</Link>
      )}
    </>
  );
};
