import { handleScroll } from "./ContentPage";

const Title = ({ handleScroll }: handleScroll) => {
  return (
    <div className="title">
      <h2>Курс для будущих барменов</h2>
      <h1>
        Создавай <span>шедевры</span> в бокале
      </h1>
      <h3>
        Углуби свои знания или начни с нуля. Независимо от уровня подготовки, курс поможет тебе
        улучшить мастерство создания коктейлей
      </h3>
      <a onClick={() => handleScroll("#about")} className="title__button">
        Подробнее
      </a>
    </div>
  );
};

export default Title;
