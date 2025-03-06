import { Link, useLocation } from "react-router";
import { PATH } from "../../constants/path";
import style from "./Navigation.module.scss";

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <header>
      {pathname === PATH.AddBook ? (
        <Link className={style.link} to={PATH.Dashboard}>
          Dashboard
        </Link>
      ) : (
        <Link className={style.link} to={PATH.AddBook}>
          Add a Book
        </Link>
      )}
    </header>
  );
};
