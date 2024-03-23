import s from './Navbar.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import cn from 'classnames';
import User from '../../assets/user.svg';
import Message from '../../assets/message.svg';
import Todolist from '../../assets/todo.svg';
import Settings from '../../assets/settings.svg';
import EnglishCards from '../../assets/card-eng.svg';
import Books from '../../assets/books.svg';
import News from '../../assets/news.svg';

// По хорошему нам с сервера должны приходить ссылки которые мы будем рендерить(могут быть приветные пути для
// админа) , а есть для простого юзера. Ну и плюс нет хард-кода!

export type NavbarProps = {};

export const Navbar = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className='flex'>
        <nav className={s.nav}>
          <NavLink
            className={({ isActive }) =>
              cn(s['link'], {
                [s.active]: isActive,
              })
            }
            to='/profile'
          >
            <img className={s.img} src={User} alt='' width={28} />
            Profile
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              cn(s['link'], {
                [s.active]: isActive,
              })
            }
            to='/dialogs'
          >
            <img className={s.img} src={Message} alt='' width={28} />
            Messages
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              cn(s['link'], {
                [s.active]: isActive,
              })
            }
            to='/news'
          >
            <img src={News} alt='' width={24} />
            News
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              cn(s['link'], {
                [s.active]: isActive,
              })
            }
            to='/books'
          >
            <img src={Books} alt='' width={24} />
            Books
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              cn(s['link'], {
                [s.active]: isActive,
              })
            }
            to='/todolist'
          >
            <img className={s.img} src={Todolist} alt='' />
            Todolist
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              cn(s['link'], {
                [s.active]: isActive,
              })
            }
            to='/settings'
          >
            <img src={Settings} alt='' width={24} />
            Settings
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              cn(s['link'], {
                [s.active]: isActive,
              })
            }
            to='/englishCard'
          >
            <img src={EnglishCards} alt='' width={24} />
            English card
          </NavLink>
        </nav>

        <div className={s.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
