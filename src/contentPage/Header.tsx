import { NavLink } from "react-router-dom";
import avatarIcon from "../assets/avatar.png";
import logoIcon from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logoIcon} alt="logo" className="logo" />
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a>о курсе</a>
          </li>
          <li className="header__item">
            <a>тарифы</a>
          </li>
          <li className="header__item">
            <a>FAQ</a>
          </li>
          <li className="header__item">
            <NavLink to="/login">Личный кабинет</NavLink>
            <img src={avatarIcon} alt="Avatar" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
