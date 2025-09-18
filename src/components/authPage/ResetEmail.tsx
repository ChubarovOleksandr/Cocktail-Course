import { NavLink, useNavigate } from "react-router-dom";
import arrowLeftIcon from "../../assets/arrow-left.png";
import { useForm } from "react-hook-form";
import emailIcon from "../../assets/email.png";
import alarmIcon from "../../assets/!.png";
import { EmailInterface } from "../../api/passwords/interface";
import { requestResetPasswordAPI } from "../../api/passwords/PasswordService";
import { useAppDispatch } from "../../store";
import { setUserEmail } from "../../store/slices/authSlice";

const ResetEmail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<EmailInterface>();

  const onSubmitHandler = async ({ email }: EmailInterface) => {
    try {
      await requestResetPasswordAPI({ email });

      dispatch(setUserEmail(email));
      navigate("/auth/code");
    } catch (error) {
      setError("email", { message: "Ошибка при отправке письма" });
    }
  };

  return (
    <div className="authPage">
      <NavLink to="/auth" className="return">
        <img src={arrowLeftIcon} alt="arrow" />
        Назад
      </NavLink>
      <div className="card">
        <span className="title">Восстановление</span>
        <form className="reset-form" onSubmit={handleSubmit(onSubmitHandler)}>
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
              <img src={alarmIcon} alt="alarmIcon" />
              {errors.email.message}
            </span>
          )}
          <button className={`submit ${isValid && "valid"}`}>Отправить код</button>
        </form>
      </div>
    </div>
  );
};

export default ResetEmail;
