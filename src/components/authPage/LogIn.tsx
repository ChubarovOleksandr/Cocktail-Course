import { useForm } from "react-hook-form";
import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/lock.png";
import { HandleFlip } from "./AuthPage";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import alarmIcon from "../../assets/!.png";
import { LoginDataInterface } from "../../api/interface";
import axios from "axios";
import { loginUserAPI } from "../../api/users/UsersService";
import { getUserData, setUserData } from "../../utils/userData";
import { useEffect } from "react";

const LogIn = ({ handleFlip }: HandleFlip) => {
  const navigate = useNavigate();

  const {
    register,
    setError,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginDataInterface>({
    mode: "onSubmit",
  });

  const onSubmitHandler = async (data: LoginDataInterface) => {
    try {
      await loginUserAPI(data);

      setUserData(data);
      navigate("/course/content");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError("email", { message: error.response.data.detail });
      } else {
        setError("email", { message: "Что-то пошло не так, попробуйте позже" });
      }
    }
  };

  useEffect(() => {
    const userData = getUserData();

    if (userData) {
      setValue("email", userData.email);
      setValue("password", userData.password);

      trigger();
    }
  }, []);

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
