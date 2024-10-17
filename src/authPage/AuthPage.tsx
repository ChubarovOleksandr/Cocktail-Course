import { useState } from "react";
import "../style/authPage/authPage.scss";
import arrowLeftIcon from '../assets/arrow-left.png';
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { NavLink } from 'react-router-dom';

export interface handleFlip {
  handleFlip: () => void;
}

const AuthPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="authPage">
      <NavLink to='/' className='return'><img src={arrowLeftIcon} alt="arrow" />Назад</NavLink>
      <div className="card-3d-wrap">
        <div className={`card-3d-wrapper ${isFlipped ? "flipped" : ""}`}>
          <SignUp handleFlip={handleFlip} />
          <LogIn handleFlip={handleFlip} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
