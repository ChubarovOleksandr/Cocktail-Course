import { editUserPayStatusAPI, getUserReceiptFileAPI } from "../../api/users/UsersService";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const UserDetailPage = () => {
  const userData = useSelector((state: RootState) => state.user.userData);

  const fetchFiles = async () => {
    if (userData.pay_status === "unpaid") {
      alert("Пользователь не оплатил курс, файл отсутствует");
      return;
    }

    try {
      const blob = await getUserReceiptFileAPI(userData.id);
      const contentType = blob.type;

      let extension = "file";
      if (contentType === "application/pdf") {
        extension = "pdf";
      } else if (contentType === "image/jpeg") {
        extension = "jpg";
      } else if (contentType === "image/png") {
        extension = "png";
      } else {
        console.warn("Неизвестный тип файла:", contentType);
      }

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `receipt_user_${userData.id}.${extension}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Ошибка при загрузке файла:", error);
      alert("Произошла ошибка при получении файла.");
    }
  };

  const changePayStatus = async () => {
    const newPayStatus = prompt(
      "Введите новый статус оплаты (unpaid, start, master, expert):",
      userData.pay_status
    );
    if (
      newPayStatus === "unpaid" ||
      newPayStatus === "start" ||
      newPayStatus === "master" ||
      newPayStatus === "expert"
    ) {
      await editUserPayStatusAPI(userData.id, newPayStatus);
      alert("Статус оплаты успешно изменен. Пожалуйста, вернитесь назад и обновите страницу.");
    }
  };

  if (!userData) {
    alert("Нет данных пользователя");
    return null;
  }

  return (
    <div className="admin-page">
      {userData ? (
        <div>
          <h2>Детали пользователя</h2>
          <p>
            <span>ID:</span> {userData.id}
          </p>
          <p>
            <span>Email:</span> {userData.email}
          </p>
          <p>
            <span>Статус оплаты:</span> {userData.pay_status}
          </p>
          <button className="download-file" onClick={fetchFiles}>
            Загрузить файл оплаты
          </button>
          <button className="download-file" onClick={changePayStatus}>
            Изменить статус оплаты
          </button>
          <button className="download-file" onClick={() => window.history.back()}>
            Вернуться
          </button>
        </div>
      ) : (
        <p>Загрузка данных пользователя...</p>
      )}
    </div>
  );
};
