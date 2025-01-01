import { useForm } from "react-hook-form";
import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/lock.png";
import { handleFlip } from "./AuthPage";

const LogIn = ({ handleFlip }: handleFlip) => {
  type FormData = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();

  const onSubmitHandler = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="card-back">
      <span className="card__title">Вход</span>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="inputs">
          <label>
            <img src={emailIcon} alt="email" />
            <input
              type="email"
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
          {errors.email && <span className="error">{errors.email.message}</span>}
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
          {errors.password && <span className="error">{errors.password.message}</span>}
          {/* <span className="forget">Забыли пароль?</span> */}
        </div>
        <div className="buttons">
          <button className={`submit ${isValid && 'valid'}`}>Войти</button>
          <button type="button" className="flip-btn" onClick={handleFlip}>
            Нету аккаунта?
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
