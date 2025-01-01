import { handleScroll } from "./ContentPage";

const Title = ({ handleScroll }: handleScroll) => {
  return (
    <div className="title">
      <div className="title__text">
        {/* <h2>От истории до трендов</h2> */}
        <h1>
          знания которые помогут начать и <span>достичь вершин</span> в барной индустрии
        </h1>
        {/* <h3> */}
        {/* От истории до трендов, знания которые помогут начать и достичь вершин в барной индустрии */}
        {/* </h3> */}
        <a onClick={() => handleScroll("#about")} className="title__button">
          Подробнее
        </a>
      </div>
    </div>
  );
};

export default Title;
