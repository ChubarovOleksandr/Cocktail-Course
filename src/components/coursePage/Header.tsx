import { NavLink } from "react-router-dom";
import logoIcon from "../../assets/logo.png";
import avatarIcon from "../../assets/avatar.png";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <img src={logoIcon} className="logo" alt="logo" />
        <div className="links">
          <NavLink to="/">На главную</NavLink>
          <NavLink to="content">Материал</NavLink>
          <NavLink to="tariff">Тарифы</NavLink>
          <div>
            <NavLink to="/auth">Выйти</NavLink>
            <img src={avatarIcon} alt="Avatar" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
