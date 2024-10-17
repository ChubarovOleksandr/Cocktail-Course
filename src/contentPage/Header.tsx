import { NavLink } from "react-router-dom";
import avatarIcon from "../assets/avatar.png";
import logoIcon from "../assets/logo.png";
import { handleScroll } from "./ContentPage";

const Header = ({ handleScroll }: handleScroll) => {
  return (
    <header className="header">
      <img src={logoIcon} alt="logo" className="logo" />
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a onClick={() => handleScroll("#about")}>о курсе</a>
          </li>
          <li className="header__item">
            <a onClick={() => handleScroll("#price")}>тарифы</a>
          </li>
          <li className="header__item">
            <a onClick={() => handleScroll("#faq")}>FAQ</a>
          </li>
          <li className="header__item">
            <NavLink to="/auth">Личный кабинет</NavLink>
            <img src={avatarIcon} alt="Avatar" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;