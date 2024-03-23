import { Button } from '../../UI/buttons/Button/Button';
import Logo from '../../assets/logo.svg';
import s from './Header.module.css';

export type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={Logo} alt='' />
      <h3 className={s.title}>{title}</h3>
      <Button className={s.login} appearence='big'>
        Log In
      </Button>
    </header>
  );
};
