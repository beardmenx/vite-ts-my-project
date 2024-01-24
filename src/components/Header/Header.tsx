import Logo from "../../assets/logo.svg";
export type HeaderProps = {};

export const Header: HeaderProps = () => {
  return (
    <header className="header">
      <img src={Logo} alt="" />
    </header>
  );
};
