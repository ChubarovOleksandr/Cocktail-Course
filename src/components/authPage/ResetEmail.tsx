import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import arrowLeftIcon from "../../assets/arrow-left.png";
import { useForm } from "react-hook-form";
import { emailField } from "../../types/authTypes";
import emailIcon from "../../assets/email.png";
import { checkEmailThunk, setResetEmail } from "../../store/slices/authSlice";
import alarmIcon from "../../assets/!.png";

const ResetEmail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<emailField>();

  const onSubmitHandler = async (email: emailField) => {
    const resultAction = await dispatch(checkEmailThunk(email));
    if (resultAction.meta.requestStatus == "fulfilled") {
      await dispatch(setResetEmail(email.email))
      navigate('/auth/code')
    }
    if (resultAction.meta.requestStatus == "rejected") {
      switch (resultAction.payload.status) {
        case 422:
          setError("email", { message: "Проверьте правильность почты" });
          break;
        default:
          setError("email", { message: "Ошибка. Попробуйте позже" });
          break;
      }
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
