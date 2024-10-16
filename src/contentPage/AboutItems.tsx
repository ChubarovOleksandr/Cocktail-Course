import photo1 from "../assets/homemade.jpg";
import photo2 from "../assets/bar.jpg";
import photo3 from "../assets/drink.jpg";
import photo4 from "../assets/business.jpg";

const AboutItems = () => {
  return (
    <ul className="about__list">
      <li className="about__item">
        <img src={photo1} alt="1" />
        <div className="item__body">
          <span className="item__title">Любителям коктейлей и домашнего bartending</span>
          <p className="item__p">
            Этот курс идеально подходит для тех, кто хочет научиться готовить вкусные коктейли,
            удивлять своих друзей на вечеринках и развивать свои навыки в приготовлении напитков
          </p>
        </div>
      </li>
      <li className="about__item">
        <img src={photo3} alt="3" />
        <div className="item__body">
          <span className="item__title">Каждому, кто хочет открывать новые вкусы</span>
          <p className="item__p">
            Независимо от вашего уровня подготовки, если вы хотите познакомиться с искусством
            коктейльного мастерства и научиться создавать оригинальные напитки, этот курс для вас
          </p>
        </div>
      </li>
      <li className="about__item">
        <img src={photo2} alt="2" />
        <div className="item__body">
          <span className="item__title">Профессионалам и амбициозным барменам</span>
          <p className="item__p">
            Если вы хотите улучшить свои навыки, освоить новые техники и рецепты коктейлей, этот
            курс поможет вам стать более уверенным и креативным барменом
          </p>
        </div>
      </li>
      <li className="about__item">
        <img src={photo4} alt="4" />
        <div className="item__body">
          <span className="item__title">Организаторам мероприятий и предпринимателям</span>
          <p className="item__p">
            Если вы планируете мероприятия или хотите создать собственный бизнес, этот курс даст вам
            необходимые знания для разработки уникального коктейльного меню и впечатления ваших
            гостей
          </p>
        </div>
      </li>
    </ul>
  );
};

export default AboutItems;
