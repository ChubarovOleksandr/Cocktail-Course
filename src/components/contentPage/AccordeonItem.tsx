import { useState } from "react";
import { FaqItemInterface } from "./InformationBlock";

interface Props {
  data: FaqItemInterface;
}

const AccordeonItem = ({ data }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordeon animation" onClick={() => setIsOpen(!isOpen)}>
      <button>{data.question}</button>
      <div className={isOpen ? "open content" : "content"}>
        {data.answer.map((answerItem, index) => (
          <div key={index}>
            {answerItem.span && <p key={index}>{answerItem.span}</p>}
            {answerItem.p && (
              <ul key={index}>
                {answerItem.p.map((paragraph, pIndex) => (
                  <li key={pIndex}>
                    <span>{paragraph}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordeonItem;
