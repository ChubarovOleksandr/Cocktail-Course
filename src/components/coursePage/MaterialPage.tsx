import "../../style/coursePage/materialPage.scss";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../store";
import {setActiveLecture} from "../../store/slices/lectureSlice";
import {lectureType} from "../../types/materialTypes";
import {lectures} from "../../data/lecturesData";
import infoIcon from "../../assets/information.png";
import {useEffect, useRef, useState} from "react";
import {getUserData} from "../../utils/userData";
import {NavLink, useNavigate} from "react-router-dom";

const MaterialPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const activeLecture = useSelector((state: RootState) => state.lecture.activeLecture);

  const [message, setMessage] = useState("");
  const [isInfoShow, setIsInfoShow] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [newNote, setNewNote] = useState("");
  const noteRef = useRef<HTMLTextAreaElement | null>(null);

  const onSelectLecture = (lecture: lectureType) => {
    dispatch(setActiveLecture(lecture));
  };

  const checkCourseAccess = () => {
    return !!getUserData()?.course;
  };

  useEffect(() => {
    const access = checkCourseAccess();
    setHasAccess(access);
    if (!access) {
      setMessage("Вы не купили никакой курс. Хотите перейти к выбору сейчас?");
    }
  }, []);

  return (
    <div className="content">
      <div className="container">
        {message ? (
          <div className="message-block">
            <div className="message">{message}</div>
            <NavLink to="/course/tariff">Перейти</NavLink>
          </div>
        ) : (
          <>
            <div className="lectures">
              <div className="lectures__title">Лекции</div>
              <ul>
                {lectures.map((lecture, index) => (
                  <li
                    key={lecture.id}
                    className={lecture.id === activeLecture?.id ? "active" : ""}
                    onClick={() => onSelectLecture(lecture)}
                  >
                    {index + 1}. {lecture.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="video">
              {!activeLecture ? (
                <div className="preview">
                  <h1>Выберите любую лекцию и получайте знания уже сейчас!</h1>
                  <h2>
                    Подчеркните огромное количество новых знаний, слушая каждую лекцию! Используйте возможность
                    делать подробные{" "}
                    <span>
                      заметки
                      <img
                        onMouseEnter={() => setIsInfoShow(true)}
                        onMouseLeave={() => setIsInfoShow(false)}
                        src={infoIcon}
                        alt="infoIcon"
                      />
                      <div className={`info ${isInfoShow && "show"}`}>
                        Пожалуйста, не очищайте кеш этого сайта, иначе ваши заметки пропадут
                      </div>
                    </span>
                    , конспектируйте самые ценные идеи и тонкости, чтобы ничего не упустить на пути к знаниям
                  </h2>
                  <button onClick={() => dispatch(setActiveLecture(lectures[0]))}>Начать</button>
                </div>
              ) : (
                <div className="text">
                  <h1>{activeLecture.title}</h1>
                  <h2>{activeLecture.subtitle}</h2>
                  <iframe src={activeLecture.url} width="840" height="480" allowFullScreen></iframe>
                  <div className="note">
                    <textarea
                      ref={noteRef}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="Введите заметку"
                    ></textarea>
                    <button className={newNote.length > 0 ? "active" : ""}>Сохранить</button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MaterialPage;
