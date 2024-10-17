import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/lock.png";
import { handleFlip } from "./AuthPage";

const SignUp = ({ handleFlip }: handleFlip) => {
  return (
    <div className="card-front">
      <span className="card__title">Регистрация</span>
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
        </div>
        <div className="buttons">
          <button className="submit">Создать</button>
          <button type="button" className="flip-btn" onClick={handleFlip}>
            Уже есть аккаунт?
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
