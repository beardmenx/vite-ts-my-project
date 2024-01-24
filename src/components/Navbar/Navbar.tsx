export type NavbarProps = {};

export const Navbar: NavbarProps = () => {
  return (
    <nav className="nav">
      <div>
        <a href="/">Profile</a>
      </div>
      <div>
        <a href="/">Messages</a>
      </div>
      <div>
        <a href="/">News</a>
      </div>
      <div>
        <a href="/">Music</a>
      </div>
      <div>
        <a href="/">Settings</a>
      </div>
    </nav>
  );
};
