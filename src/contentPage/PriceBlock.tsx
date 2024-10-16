import PriceCard from "./PriceCard";

export interface cardData {
  title: string;
  price: number;
  advantages: string[];
  recommended?: boolean;
} 

const PriceBlock = () => {

  const cardsData: cardData[] = [
    {
      title: "Базовый",
      price: 100,
      advantages: [
        "Материал доступен месяц",
        "Материал доступен месяц",
        "Материал доступен месяц",
        "Материал доступен месяц",
        "Материал доступен месяц",
      ],
    },
    {
      title: "Премиум",
      price: 200,
      advantages: [
        "Материал доступен на 2 месяца",
        "Материал доступен на 2 месяца",
        "Материал доступен на 2 месяца",
        "Материал доступен на 2 месяца",
        "Материал доступен на 2 месяца",
      ],
      recommended: true,
    },
    {
      title: "Люкс",
      price: 300,
      advantages: [
        "Материал доступен на всегда",
        "Материал доступен на всегда",
        "Материал доступен на всегда",
        "Материал доступен на всегда",
        "Материал доступен на всегда",
      ],
    },
  ];


  return (
    <div className="price">
      <div className="container">
        <span className="price__title">Тарифы</span>
        <p className="price__description">
          Покупая курс, вы приобретаете опыт, накопленный <span className="underline">годами</span>
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
