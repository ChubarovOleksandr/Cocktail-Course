import "../../style/coursePage/materialPage.scss";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { setActiveLecture } from "../../store/slices/lectureSlice";
import { lectureType } from "../../types/materialTypes";
import { lectures } from "../../data/lecturesData";
import infoIcon from "../../assets/information.png";
import { useRef, useState } from "react";

const MaterialPage = () => {
  const dispatch = useAppDispatch();

  const activeLecture = useSelector((state: RootState) => state.lecture.activeLecture);

  const [isInfoShow, setIsInfoShow] = useState(false);
  const [newNote, setNewNote] = useState('');
  const noteRef = useRef<HTMLTextAreaElement | null>(null);

  const onSelectLecture = (lecture: lectureType) => {
    dispatch(setActiveLecture(lecture));
  };

  return (
    <div className="content">
      <div className="container">
        <div className="lectures">
          <div className="lectures__title">Лекции</div>
          <ul>
            {lectures.map((lecture, index) => (
              <li
                key={index}
                className={index == activeLecture?.id ? "active" : ""}
                onClick={(e) => onSelectLecture(lecture)}
              >
                {++index}. {lecture.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="video">
          {!activeLecture ? (
            <div className="preview">
              <h1>Выберите любую лекцию и получайте знания уже сейчас!</h1>
              <h2>
                Подчеркните огромное количество новых знаний, слушая каждую лекцию! Используйте
                возможность делать подробные{" "}
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
                , конспектируйте самые ценные идеи и тонкости, чтобы ничего не упустить на пути к
                знаниям
              </h2>
              <button onClick={() => dispatch(setActiveLecture(lectures[0]))}>Начать</button>
            </div>
          ) : (
            <div className="text">
              <h1>{activeLecture.title}</h1>
              <h2>{activeLecture.subtitle}</h2>
              <iframe
                src={activeLecture.url}
                width="840"
                height="480"
                allowFullScreen
                // allow="autoplay"
              ></iframe>
              <div className="note">
              <textarea ref={noteRef} onChange={e => setNewNote(e.target.value)} placeholder="Введите заметку"></textarea>
              <button className={newNote.length > 0 ? 'active' : ''}>Сохранить</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaterialPage;
