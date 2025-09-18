import { useEffect, useState } from "react";
import "../../style/adminPage/adminPage.scss";
import { useNavigate } from "react-router-dom";
import { UserInfoInterface } from "../../api/interface";
import { getAllUsersAPI } from "../../api/users/UsersService";
import { useAppDispatch } from "../../store";
import { setUserData } from "../../store/slices/userSlice";

export const AdminPage = () => {
  const dispatch = useAppDispatch();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [users, setUsers] = useState<UserInfoInterface[]>([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const usersData = await getAllUsersAPI();
    setUsers(usersData.reverse());
  };

  useEffect(() => {
    // const password = prompt("Введите пароль администратора");
    if (1 < 2) {
      setHasAccess(true);
      fetchUsers();
    } else {
      setHasAccess(false);
      alert("Неверный пароль. Доступ запрещен.");
      navigate("/");
    }
  }, []);

  if (hasAccess === null) return null;
  if (!hasAccess) return null;

  const onUserClick = (user: UserInfoInterface) => {
    dispatch(setUserData(user));
    navigate(`/admin/users`);
  };

  return (
    <div className="admin-page">
      <h1>Панель администратора</h1>
      <h2>Список пользователей: {users.length}</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <button onClick={() => onUserClick(user)} key={user.id}>
              ID: {user.id}, Email: {user.email}, Статус оплаты: {user.pay_status}
            </button>
          ))}
        </ul>
      ) : (
        <p>Пользователи не найдены :( </p>
      )}
    </div>
  );
};
