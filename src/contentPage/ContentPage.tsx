import AboutItems from "./AboutItems";
import Header from "./Header";
import Title from "./Title";
import "../style/contentPage/contentPage.scss";
import PriceBlock from "./PriceBlock";
import InformationBlock from "./InformationBlock";

const ContentPage = () => {
  return (
    <>
      <div className="intro">
        <div className="container">
          <Header />
          <Title />
        </div>
      </div>
      <div className="about">
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
