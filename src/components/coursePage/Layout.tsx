import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getUserInfoAPI } from "../../api/users/UsersService";
import { getUserData } from "../../utils/userData";
import Header from "./Header";
import "../../style/coursePage/layout.scss";
import "../../style/coursePage/courseMedia.scss";
import { PayStatusEnum } from "../../api/users/enums";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
