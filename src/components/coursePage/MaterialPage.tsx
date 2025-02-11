import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import {RootState, useAppDispatch} from "../../store";
import { getNotes, setNotes } from "../../utils/notesData";
import {setActiveLecture} from "../../store/slices/lectureSlice";
import {lectureType} from "../../types/materialTypes";
import {lectures} from "../../data/lecturesData";
import {getUserData} from "../../utils/userData";
import infoIcon from "../../assets/information.png";
import "../../style/coursePage/materialPage.scss";
import '../../style/coursePage/courseMedia.scss';

const MaterialPage = () => {
  const dispatch = useAppDispatch();

  const activeLecture = useSelector((state: RootState) => state.lecture.activeLecture);

  const infoRef = useRef<HTMLSpanElement | null>(null);
  const [message, setMessage] = useState("");
  const [isInfoShow, setIsInfoShow] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [newNote, setNewNote] = useState("");
  const noteRef = useRef<HTMLTextAreaElement | null>(null);

  const onSelectLecture = (lecture: lectureType) => {
    setNewNote('');
    dispatch(setActiveLecture(lecture));
  };

  const checkCourseAccess = () => {
    return !!getUserData()?.course;
  };

  const onSaveNote = () => {
    if(activeLecture?.id != null){
      setNotes(activeLecture.id, newNote);
    }
  };

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1500 && infoRef.current) {
      infoRef.current.addEventListener("click", () =>
        alert("Пожалуйста, не очищайте кеш этого сайта, иначе ваши заметки пропадут")
      );
    }

    return () => {
      if(infoRef.current) {
        infoRef.current.removeEventListener('click', () => {})
      }
    }
  }, [])

  useEffect(() => {
    const access = checkCourseAccess();
    setHasAccess(true);
    // if (!access) {
    //   setMessage("Вы не купили никакой курс. Хотите перейти к выбору сейчас?");
    // }
  }, []);

  useEffect(() => {
    if(activeLecture?.id != null){
      const oldNote = JSON.parse(getNotes(activeLecture?.id)!);
      if (oldNote) {
        setNewNote(oldNote);
      }
    }
  }, [activeLecture?.id])

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
                  <h1>Привет!</h1>
                  <h2>
                    Этот курс — концентрированная база знаний для барменов. Лекции лучше смотреть
                    последовательно, так как темы взаимосвязаны. Чтобы извлечь максимум,
                    абстрагируйся от всего остального и полностью погрузись в материал.{" "}
                  </h2>
                  <h2>Готов? Начнём!</h2>
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
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="Введите заметку"
                    ></textarea>
                    <button onClick={onSaveNote} className={newNote.length > 0 ? "active" : ""}>
                      Сохранить
                    </button>
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
