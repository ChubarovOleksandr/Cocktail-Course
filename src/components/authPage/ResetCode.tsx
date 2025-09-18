import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/index";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import arrowLeftIcon from "../../assets/arrow-left.png";
import { useForm } from "react-hook-form";
import keyIcon from "../../assets/key.png";
import alarmIcon from "../../assets/!.png";
import { useEffect } from "react";
import { verifyResetCodeAPI } from "../../api/passwords/PasswordService";

interface CodeInterface {
  code: string;
}

const ResetCode = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const resetEmail = useSelector((state: RootState) => state.auth.userEmail);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<CodeInterface>();

  const onSubmitHandler = async ({ code }: CodeInterface) => {
    try {
      await verifyResetCodeAPI({ email: resetEmail, code });
      navigate("/auth/password");
    } catch (error) {
      setError("code", { message: "Ошибка при проверке кода" });
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
