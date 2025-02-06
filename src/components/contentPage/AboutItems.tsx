import photo1 from "../../assets/1-min.jpg";
import photo2 from "../../assets/2-min.jpg";
import photo3 from "../../assets/3-min.jpg";
import photo4 from "../../assets/4-min.jpg";

import { useEffect } from "react";

const AboutItems = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("animation");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = document.querySelectorAll(".about__item");

    items.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ul className="about__list">
      <li className="about__item animation">
        <div className="about__image">
          <img src={photo1} alt="1" />
        </div>
        <div className="item__body">
          <span className="item__title">Профессионалы с опытом</span>
          <p className="item__p">
            Этот курс поможет вам углубить знания и освоить новые техники, которые откроют
            дополнительные возможности для карьерного роста. Я не только рассматриваю актуальные
            тренды в барной индустрии, но и дам вам уверенность в проведении мастер-классов,
            организации мероприятий и создании уникальных коктейлей. Вы узнаете, как грамотно
            управлять баром и повышать свои профессиональные навыки до уровня эксперта
          </p>
        </div>
      </li>
      <li className="about__item animation">
        <div className="about__image">
          <img src={photo3} alt="3" />
        </div>
        <div className="item__body">
          <span className="item__title">Начинающие мастера барного искусства</span>
          <p className="item__p">
            Если вы только начинаете свой путь в барной индустрии, этот курс — идеальный старт. Я
            научу основам барного искусства, познакомлю с историей напитков, их производством и
            правильной подачей. Вы получите необходимые знания для того, чтобы уверенно работать за
            барной стойкой, создавать коктейли, а также понять важность хранения , подач и методов
            приготовления
          </p>
        </div>
      </li>
      <li className="about__item animation">
        <div className="about__image">
          <img src={photo2} alt="2" />
        </div>
        <div className="item__body">
          <span className="item__title">Любители коктейлей и гастрономических удовольствий</span>
          <p className="item__p">
            Если вы всегда мечтали научиться создавать коктейли как профессионал или хотите понять,
            как напитки производятся , этот курс даст вам все необходимые знания. Я научу, как
            правильно сочетать ингредиенты, расскажу о различных стилях коктейлей и объясню тонкости
            приготовления напитков. Это не только для работы, но и для личного удовольствия
          </p>
        </div>
      </li>
      <li className="about__item animation">
        <div className="about__image">
          <img src={photo4} alt="4" />
        </div>
        <div className="item__body">
          <span className="item__title">Будущие владельцы баров</span>
          <p className="item__p">
            Если вашей целью является открытие собственного бара, этот курс обеспечит вас
            фундаментальными знаниями, которые станут частью основы для успешного бизнеса. Я
            расскажу о трендах в индустрии, основах организации работы бара, правильном выборе
            алкоголя и аксессуаров. Получите знания, которые помогут вам грамотно стартовать и
            успешно развивать свой бизнес
          </p>
        </div>
      </li>
    </ul>
  );
};

export default AboutItems;
