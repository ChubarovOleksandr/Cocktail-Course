import { useForm } from "react-hook-form";
import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/lock.png";
import { handleFlip } from "./AuthPage";
import { formData } from "../../types/authTypes";
import { useAppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../store/slices/authSlice";
import { setUserData } from "../../utils/userData";
import { NavLink } from "react-router-dom";
import alarmIcon from "../../assets/!.png";
import {setLogInDate} from "../../utils/logInDate";

const LogIn = ({ handleFlip }: handleFlip) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({
    mode: "onSubmit",
  });

  const onSubmitHandler = async (data: formData) => {
    const resultAction = await dispatch(loginThunk(data));
    if (resultAction.meta.requestStatus == "fulfilled") {
      setUserData({...data, course: resultAction.payload.course});
      setLogInDate();
      navigate("/course/content");
    } else {
      switch (resultAction.payload.status) {
        case 404:
          setError("email", { message: "Пользователь не найден" });
          break;
        case 422:
          setError("email", { message: "Почта не корректна" });
          break;
        case 401:
          setError("password", { message: "Неверный пароль" });
          break;
        default:
          setError("password", { message: "Ошибка. Попробуйте позже" });
          break;
      }
    }
  };

  return (
    <div className="card-back">
      <span className="title">Вход</span>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="inputs">
          <label>
            <img src={emailIcon} alt="email" />
            <input
              type="email"
              autoComplete="off"
              {...register("email", {
                required: { value: true, message: "Это поле обязательное" },
                minLength: {
                  value: 5,
                  message: "Почта должна быть длиннее 5 символов",
                },
              })}
              placeholder="Почта"
            />
          </label>
          {errors.email && (
            <span className="field-error">
              <img src={alarmIcon} alt="info" />
              {errors.email.message}
            </span>
          )}
          <label>
            <img src={passwordIcon} alt="lock" />
            <input
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Это поле обязательное",
                },
                minLength: {
                  value: 5,
                  message: "Пароль не может быть меньше пяти символов",
                },
              })}
              placeholder="Пароль"
            />
          </label>
          {errors.password && (
            <span className="field-error">
              <img src={alarmIcon} alt="info" />
              {errors.password.message}
            </span>
          )}
          <NavLink to="/auth/email" className="forget">
            Забыли пароль?
          </NavLink>
        </div>
        <div className="buttons">
          <button className={`submit ${isValid && "valid"}`}>Войти</button>
          <button type="button" className="flip-btn" onClick={handleFlip}>
            Нету аккаунта?
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
