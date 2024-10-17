import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/lock.png";
import { handleFlip } from "./AuthPage";

const LogIn = ({ handleFlip }: handleFlip) => {
  return (
    <div className="card-back">
      <span className="card__title">Вход</span>
      <form>
        <div className="inputs">
          <label>
            <img src={emailIcon} alt="email" />
            <input type="email" placeholder="Почта" />
          </label>
          <label>
            <img src={passwordIcon} alt="lock" />
            <input type="password" placeholder="Пароль" />
          </label>
          {/* <span className="forget">Забыли пароль?</span> */}
        </div>
        <div className="buttons">
          <button className="submit">Войти</button>
          <button type="button" className="flip-btn" onClick={handleFlip}>
            Нету аккаунта?
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
