export type NavbarProps = {};

import s from "./Navbar.module.css";
import {ButtonsNavBar} from "../../UI/buttons/buttonsNavBar/ButtonsNavBar";
import { memo } from "react";

const listLink = [
  {title:"Profile", to:"/profile"},
  {title:"Messages", to:"/dialogs"},
  {title:"News", to:"/"},
  {title:"Books", to:"/books"},
  {title:"Todolist", to:"/todolist"},
  {title:"Settings", to:"/settings"},
  {title:"English Card", to:"/english"},
]

// По хорошему нам с сервера должны приходить ссылки которые мы будем рендерить(могут быть приветные пути для 
// админа) , а есть для простого юзера. Ну и плюс нет хард-кода!

export const Navbar = memo( () => {
  return (
    <nav className={s.nav}>
      {listLink.map(link => <ButtonsNavBar key={link.title} title={link.title} to={link.to} />)}
     
    </nav>
  );
})
