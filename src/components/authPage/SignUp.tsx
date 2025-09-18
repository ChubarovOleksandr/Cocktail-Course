import { useForm } from "react-hook-form";
import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/lock.png";
import { HandleFlip } from "./AuthPage";
import alarmIcon from "../../assets/!.png";
import { useNavigate } from "react-router-dom";
import { LoginDataInterface } from "../../api/interface";
import { createUserAPI } from "../../api/users/UsersService";

const SignUp = ({ handleFlip }: HandleFlip) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<LoginDataInterface>({
    mode: "onSubmit",
  });

  const onSubmitHandler = async (data: LoginDataInterface) => {
    try {
      await createUserAPI(data);
      navigate("/course");
    } catch (error) {
      setError("email", { message: "Ошибка при регистрации" });
    }
  };

  return (
    <div className="card-front">
      <span className="title">Регистрация</span>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="inputs">
          <label>
            <img src={emailIcon} alt="email" />
            <input
              type="email"
              autoComplete="off"
              placeholder="Почта"
              {...register("email", {
                required: {
                  value: true,
                  message: "Это поле обязательное",
                },
                minLength: {
                  value: 5,
                  message: "Почта должна быть длиннее 5 символов",
                },
              })}
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
              placeholder="Пароль"
              {...register("password", {
                required: {
                  value: true,
                  message: "Это поле обязательное",
                },
                minLength: {
                  value: 5,
                  message: "Пароль должен быть длиннее 5 символов",
                },
              })}
            />
          </label>
          {errors.password && (
            <span className="field-error">
              <img src={alarmIcon} alt="info" />
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="buttons">
          <button className={`submit ${isValid && `valid`}`}>Создать</button>
          <button type="button" className="flip-btn" onClick={handleFlip}>
            Уже есть аккаунт?
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
