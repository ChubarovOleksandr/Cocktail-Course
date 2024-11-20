import AboutItems from "./AboutItems";
import Header from "./Header";
import Title from "./Title";
import "../style/contentPage/contentPage.scss";
import PriceBlock from "./PriceBlock";
import InformationBlock from "./InformationBlock";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export interface handleScroll {
  handleScroll: (id: string) => void;
}

const ContentPage = () => {
  const navigate = useNavigate();

  const handleScroll = (id: string) => {

    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      navigate("/");
    }
  };

  return (
    <>
      <div className="intro">
          <Header handleScroll={handleScroll} />
          <Title handleScroll={handleScroll} />
      </div>
      <div className="about" id="about">
        <div className="container">
          <span className="about__title">Кому подойдет курс</span>
          <AboutItems />
        </div>
      </div>
      <PriceBlock />
      <InformationBlock />
    </>
  );
};

export default ContentPage;
