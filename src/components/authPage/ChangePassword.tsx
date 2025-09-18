import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import arrowLeftIcon from "../../assets/arrow-left.png";
import { useForm } from "react-hook-form";
import passwordIcon from "../../assets/lock.png";
import alarmIcon from "../../assets/!.png";
import { resetPasswordAPI } from "../../api/passwords/PasswordService";

interface PasswordInterface {
  password: string;
}

const ChangePassword = () => {
  const navigate = useNavigate();

  const resetEmail = useSelector((state: RootState) => state.auth.userEmail);

  if (!resetEmail) {
    navigate("/auth");
  }

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PasswordInterface>();

  const onSubmitHandler = async ({ password }: PasswordInterface) => {
    try {
      await resetPasswordAPI({ email: resetEmail, new_password: password });
      navigate("/auth");
    } catch (error) {
      setError("password", { message: "Ошибка при изменении пароля" });
    }
  };

  return (
    <div className="authPage">
      <NavLink to="/auth/code" className="return">
        <img src={arrowLeftIcon} alt="arrow" />
        Назад
      </NavLink>
      <div className="card">
        <span className="title pb">Восстановление</span>
        <form className="reset-form" onSubmit={handleSubmit(onSubmitHandler)}>
          <label>
            <img src={passwordIcon} alt="password" />
            <input
              type="text"
              autoComplete="off"
              {...register("password", {
                required: { value: true, message: "Это поле обязательное" },
                minLength: {
                  value: 5,
                  message: "Пароль должен быть длиннее 5 символов",
                },
              })}
              placeholder="Новый пароль"
            />
          </label>
          {errors.password && (
            <span className="field-error">
              <img src={alarmIcon} alt="alarmIcon" />
              {errors.password.message}
            </span>
          )}
          <button className={`submit ${isValid && "valid"}`}>Завершить</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
