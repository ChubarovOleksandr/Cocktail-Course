import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/index";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import arrowLeftIcon from "../../assets/arrow-left.png";
import { useForm } from "react-hook-form";
import passwordIcon from "../../assets/lock.png";
import alarmIcon from "../../assets/!.png";
import { passwordField } from '../../types/authTypes';
import { resetPasswordThunk } from "../../store/slices/authSlice";

const ChangePassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const resetEmail = useSelector((state: RootState) => state.auth.resetEmail);

  const {
    register,
    setError,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm<passwordField>()

  const onSubmitHandler = async (passwordField: passwordField) => {
    const response = await dispatch(resetPasswordThunk({password: passwordField.password, email: resetEmail}));
    if(response.meta.requestStatus == 'fulfilled') {
      navigate('/auth');
    } else {
      setError('password', {message: 'Произошла ошибка'});
    }
  }

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
