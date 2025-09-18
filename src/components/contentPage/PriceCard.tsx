import { NavLink } from "react-router-dom";
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
        <span className="subtitle">{data.subtitle}</span>
        <p className="subdescription">{data.description}</p>
        <ul>
          {data.advantages.map((advantageText, index) => (
            <li key={index}>
              <b>⚫</b>
              {advantageText}
            </li>
          ))}
        </ul>
      </div>
      <div className="card__footer">
        {/* <span className="price">{data.price} $</span> */}
        <div className="block">
          <span className="price">{data.price} $</span>
          <NavLink to={"/auth"}>Получить</NavLink>
        </div>
        {data.recommended && <span>( Рекомендуемый )</span>}
      </div>
    </div>
  );
};

export default PriceCard;
