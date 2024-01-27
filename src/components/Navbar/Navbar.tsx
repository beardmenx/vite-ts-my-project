export type NavbarProps = {};
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

export const Navbar: NavbarProps = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.active : "")}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? s.active : "")}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? s.active : "")}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/books"
          className={(navData) => (navData.isActive ? s.active : "")}
        >
          Books
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/todolist"
          className={(navData) => (navData.isActive ? s.active : "")}
        >
          Todolist
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? s.active : "")}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
