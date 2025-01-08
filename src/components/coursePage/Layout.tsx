import { Outlet } from "react-router-dom";
import Header from "./Header";
import '../../style/coursePage/layout.scss';

const Layout = () => {
  return ( 
    <div className="layout">
      <Header />
      <Outlet />
    </div>
   );
}
 
export default Layout;