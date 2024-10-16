import AccordeonItem from "./AccordeonItem";

export interface accordeonItem {
  question: string;
  answer: string;
}

const InformationBlock = () => {
  const accordeonData: accordeonItem[] = [
    {
      question: "Очень часто и густо задаваемый вопрос",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat officia voluptatum iure perspiciatis, dolores doloremque earum eligendi vitae ipsa, magni, est modi blanditiis. Consectetur sapiente animi tempore dolorem laboriosam Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat officia voluptatum iure perspiciatis, dolores doloremque earum eligendi vitae ipsa, magni, est modi blanditiis. Consectetur sapiente animi tempore dolorem laboriosam",
    },
    {
      question: "Очень часто и густо задаваемый вопрос",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat officia voluptatum iure perspiciatis, dolores doloremque earum eligendi vitae ipsa, magni, est modi blanditiis. Consectetur sapiente animi tempore dolorem laboriosam!",
    },
    {
      question: "Очень часто и густо задаваемый вопрос",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat officia voluptatum iure perspiciatis, dolores doloremque earum eligendi vitae ipsa, magni, est modi blanditiis. Consectetur sapiente animi tempore dolorem laboriosam!",
    },
  ];

  return (
    <div className="faq" id="faq">
      <div className="container">
        <div className="faq__title">FAQ's</div>
        <div className="question__block">
          {accordeonData.map((itemData, index) => (
            <AccordeonItem key={index} data={itemData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InformationBlock;
