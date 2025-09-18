import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getUserInfoAPI } from "../../api/users/UsersService";
import { getUserData } from "../../utils/userData";
import Header from "./Header";
import "../../style/coursePage/layout.scss";
import "../../style/coursePage/courseMedia.scss";
import { PayStatusEnum } from "../../api/users/enums";

const Layout = () => {
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState(true);

  const checkUserAccess = async () => {
    const userLoginData = getUserData();
    const userInfo = await getUserInfoAPI(userLoginData.email);

    if (!userLoginData) {
      navigate("/");
    } else {
      // TODO check what to do if user not paid
      setHasAccess(userInfo[0].pay_status !== PayStatusEnum.Unpaid);
    }
  };

  useEffect(() => {
    checkUserAccess();
  }, []);

  if (!hasAccess) return <div></div>;

  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
