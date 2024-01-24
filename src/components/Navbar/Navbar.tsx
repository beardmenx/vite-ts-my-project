export type NavbarProps = {};
import s from "./Navbar.module.css";

export const Navbar: NavbarProps = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="/">Profile</a>
      </div>
      <div className={s.item}>
        <a href="/">Messages</a>
      </div>
      <div className={s.item}>
        <a href="/">News</a>
      </div>
      <div className={s.item}>
        <a href="/">Music</a>
      </div>
      <div className={s.item}>
        <a href="/">Settings</a>
      </div>
    </nav>
  );
};
