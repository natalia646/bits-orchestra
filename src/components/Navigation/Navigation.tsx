import { Link, useLocation } from "react-router";
import { PATH } from "../../constants/path";
import s from "./Navigation.module.scss";

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <header>
      {pathname === PATH.AddBook ? (
        <Link className={s.link} to={PATH.Dashboard}>
          Dashboard
        </Link>
      ) : (
        <Link className={s.link} to={PATH.AddBook}>
          Add a Book
        </Link>
      )}
    </header>
  );
};
