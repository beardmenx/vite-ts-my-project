import { memo } from "react";
import Logo from "../../assets/logo.svg";
import s from "./Header.module.css";

export type HeaderProps = {};

export const Header = memo( () => {
  return (
    <header className={s.header}>
      <img src={Logo} alt="" />
    </header>
  );
});
