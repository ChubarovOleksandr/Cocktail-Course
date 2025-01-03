import { useForm } from "react-hook-form";
import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/lock.png";
import { handleFlip } from "./AuthPage";
import { registerThunk } from "../../store/slices/authSlice";
import { formData } from "../../types/authTypes";
import { useAppDispatch } from "../../store";
import alarmIcon from "../../assets/!.png";
import { useNavigate } from "react-router-dom";

const SignUp = ({ handleFlip }: handleFlip) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<formData>({
    mode: "onSubmit",
  });

  const onSubmitHandler = async (data: formData) => {
    try {
      const resultAction = await dispatch(registerThunk(data));
      if (resultAction.meta.requestStatus == "fulfilled") {
        navigate("/course");
      } else {
        switch (resultAction.payload.status) {
          case 409:
            setError("email", { message: "Эта почта уже зарегистрирована" });
            break;
          case 422:
            setError("email", { message: "Проверьте правильность почты" });
            break;
          default:
            setError("email", { message: "Ошибка. Попробуйте позже" });
            break;
        }
      }
    } catch (error) {
      console.error("Ошибка:", error);
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
