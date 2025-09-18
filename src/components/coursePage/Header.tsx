import { NavLink } from "react-router-dom";
import logoIcon from "../../assets/logo.png";
import avatarIcon from "../../assets/avatar.png";
import { getUserData } from "../../utils/userData";
import { getUserInfoAPI } from "../../api/users/UsersService";

const Header = () => {
  const getTariffLink = async () => {
    const userLoginData = getUserData();
    const userInfo = await getUserInfoAPI(userLoginData.email);

    window.location.href = `https://t.me/MariaBar_bot?start=${userInfo[0].id}`;
  };

  return (
    <div className="header">
      <nav>
        <img src={logoIcon} className="logo" alt="logo" />
        <div className="links">
          <NavLink to="/">На главную</NavLink>
          <NavLink to="content">Материал</NavLink>
          <NavLink to="" onClick={getTariffLink}>
            Тарифы
          </NavLink>
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
