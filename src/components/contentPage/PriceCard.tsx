import { cardData } from "./PriceBlock";

interface props {
  data: cardData;
}

const PriceCard = ({ data }: props) => {
  return (
    <div className={data.recommended ? "card light-bg" : "card"}>
      <div className="card__header">
        <span>{data.title}</span>
      </div>
      <div className="card__body">
        {/* {data.title == 'Старт'
      ? <span>$<strong>{data.price}</strong> / месяц</span>
      : <span>$<strong>{data.price}</strong></span>} */}
        <span className="subtitle">{data.subtitle}</span>
        <p className="subdescription">{data.description}</p>
        <ul>
          {data.advantages.map((advantageText, index) => (
            <li key={index}>{advantageText}</li>
          ))}
        </ul>
      </div>
      <div className="card__footer">
        <a href="https://t.me/roles_requests_bot">Получить</a>
        {data.recommended && <span>( Рекомендуемый )</span>}
      </div>
    </div>
  );
};
 
export default PriceCard;