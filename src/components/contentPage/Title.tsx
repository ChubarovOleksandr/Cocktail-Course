import { useEffect } from "react";
import { handleScroll } from "./ContentPage";

const Title = ({ handleScroll }: handleScroll) => {
  
  useEffect(() => {
    const elements = document.querySelectorAll(".title .animation");

    for (let i = 0; i < elements.length; i++) {
      
      const element = elements[i];
      setTimeout(() => {
        element.classList.remove("animation");
      }, i * 200);
    }
  }, [])

  return (
    <div className="title">
      <div className="title__text">
        <h1 className="animation">
          знания которые помогут начать и <span>достичь вершин</span> в барной индустрии
        </h1>
        <a onClick={() => handleScroll("#about")} className="title__button animation">
          Подробнее
        </a>
      </div>
    </div>
  );
};

export default Title;
