import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/index";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import arrowLeftIcon from "../../assets/arrow-left.png";
import { useForm } from "react-hook-form";
import keyIcon from "../../assets/key.png";
import { checkCodeThunk, checkedCode } from "../../store/slices/authSlice";
import alarmIcon from "../../assets/!.png";
import { codeField } from "../../types/authTypes";
import { useEffect } from "react";

const ResetCode = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const resetEmail = useSelector((state: RootState) => state.auth.resetEmail);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<codeField>();

  const onSubmitHandler = async (code: codeField) => {
    const resultAction = await dispatch(checkCodeThunk({ code: +code.code, email: resetEmail }));
    if(resultAction.meta.requestStatus == 'fulfilled') {
      await dispatch(checkedCode());
      navigate("/auth/password");
    } else {
      switch (resultAction.payload.status) {
        case 404:
          setError('code', {message: 'Неверный код'});
          break;
        case 422:
          setError('code', {message: 'Произошла ошибка'});
          break;
        default:
          setError('code', {message: 'Произошла ошибка'});
          break;
      }
    }
  };

  useEffect(() => {
    if (!resetEmail) {
      navigate("/auth");
    }
  }, []);

  return (
    <div className="authPage">
      <NavLink to="/auth/email" className="return">
        <img src={arrowLeftIcon} alt="arrow" />
        Назад
      </NavLink>
      <div className="card">
        <span className="title pb">Восстановление</span>
        <form className="reset-form" onSubmit={handleSubmit(onSubmitHandler)}>
          <label>
            <img src={keyIcon} alt="code" />
            <input
              type="number"
              autoComplete="off"
              {...register("code", {
                required: { value: true, message: "Это поле обязательное" },
              })}
              placeholder="Код c письма"
            />
          </label>
          {errors.code && (
            <span className="field-error">
              <img src={alarmIcon} alt="alarmIcon" />
              {errors.code.message}
            </span>
          )}
          <button className={`submit ${isValid && "valid"}`}>Завершить</button>
        </form>
      </div>
    </div>
  );
};

export default ResetCode;
