import PriceCard from "./PriceCard";

export interface cardData {
  title: string;
  price: number;
  subtitle: string;
  description: string;
  advantages: string[];
  recommended?: boolean;
}

const PriceBlock = () => {
  const cardsData: cardData[] = [
    {
      title: "Старт",
      subtitle: "Доступ к лекциям на 1 месяц",
      description:
        "Для тех, кто хочет быстро получить основные знания и ознакомиться с курсом. В этом пакете вы получите доступ к лекциям и материалам на месяц, чтобы освоить основы и понять, что вам нужно для дальнейшего роста",
      price: 100,
      advantages: [
        "Доступ к видеоурокам и лекциям",
        "Все материалы курса на месяц",
        "Поддержка через форумы или чаты",
      ],
    },
    {
      title: "Мастер",
      subtitle: "Доступ к лекциям на 1 год",
      description:
        "Для тех, кто готов пройти курс глубже и в своём темпе. Этот пакет даёт полный доступ ко всем лекциям и дополнительным материалам на целый год, чтобы вы могли изучать всё от начала до конца",
      price: 200,
      advantages: [
        "Доступ к видеоурокам и лекциям на 1 год",
        "Все материалы курса",
        "Дополнительные ресурсы и обновления",
        "Поддержка через форумы или чаты",
      ],
      recommended: true,
    },
    {
      title: "Эксперт",
      subtitle: "Доступ к лекциям на 1 год + Онлайн встреча с преподавателем",
      description:
        "Для тех, кто хочет не только изучить теорию, но и получить персональное внимание. В этом пакете вы получите доступ к курсу на целый год, а также возможность провести онлайн встречу со мной на заранее выбранную тему, чтобы задать вопросы, уточнить детали и получить советы для развития в профессии",
      price: 300,
      advantages: [
        "Доступ к видеоурокам и лекциям на 1 год",
        "Все материалы курса и дополнительные ресурсы",
        "Поддержка через форумы или чаты",
        "Онлайн встреча с преподавателем по выбранной теме",
        "Персонализированная консультация и ответы на вопросы",
      ],
    },
  ];

  return (
    <div className="price" id="price">
      <div className="container">
        <span className="price__title">Тарифы</span>
        <p className="price__description">
          Доступ к знаниям на <span className="underline">твоих</span> условиях: выбери идеальный
          тариф курса
        </p>
        <div className="price__cards">
          {cardsData.map((cardInfo) => (
            <PriceCard key={cardInfo.price} data={cardInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceBlock;