import {Outlet, useNavigate} from "react-router-dom";
import Header from "./Header";
import '../../style/coursePage/layout.scss';
import {getUserData, removeUserData} from "../../utils/userData";
import {useEffect, useState} from "react";
import {getLogInDate} from "../../utils/logInDate";

const Layout = () => {
    const navigate = useNavigate();
    const [hasAccess, setHasAccess] = useState(false);

    const checkUserAccess = () => {
        const userData = getUserData();
        if (!userData) {
            navigate("/");
        } else {
            setHasAccess(true);
        }
    }

    const checkLastLogIn = () => {
        const currentDate = new Date();
        const lastLogin = getLogInDate();

        if(lastLogin){
            const inputDateObj = new Date(JSON.parse(lastLogin));
            const isSameMonth = currentDate.getMonth() === inputDateObj.getMonth();
            const isSameYear = currentDate.getFullYear() === inputDateObj.getFullYear();

            if (!isSameMonth || !isSameYear) {
                removeUserData();
            }

            const dayDiff = currentDate.getDate() - inputDateObj.getDate();
            if(dayDiff >= 30) {
                removeUserData();
            }
        }
    }

    useEffect(() => {
        checkUserAccess();
        checkLastLogIn();
    }, []);

    if (!hasAccess) return <div></div>

    return <div className="layout">
        <Header/>
        <Outlet/>
    </div>
};

export default Layout;
