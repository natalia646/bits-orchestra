import { Link } from "react-router";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Link
        className={s.link}
        to={"https://github.com/natalia646/bits-orchestra"}
        target="_blank">
        GitHub
      </Link>
      <Link
        className={s.link}
        to={"https://www.linkedin.com/in/nataliia-zaiats-63697b1b3/"}
        target="_blank">
        Linkedin
      </Link>
    </footer>
  );
};
