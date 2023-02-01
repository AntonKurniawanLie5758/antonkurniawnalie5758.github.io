import { LinkedinLogo, GithubLogo, Envelope } from "phosphor-react";

const Header = () => {
  return (
    <header className="header-section">
      <h1 className="logo">AntonLie.</h1>
      <nav className="menu-section">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Portofolio</a>
        <a href="#">Contact</a>
      </nav>
      <nav className="social-section">
        <a href="#">
          <LinkedinLogo size={32} />
        </a>
        <a href="#">
          <GithubLogo size={32} />
        </a>
        <a href="#">
          <Envelope size={32} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
