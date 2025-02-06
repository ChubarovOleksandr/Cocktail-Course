import { useState } from "react";
import { accordeonItem } from "./InformationBlock";

interface props {
  data: accordeonItem;
}

const AccordeonItem = ({data}: props) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordeon animation" onClick={() => setIsOpen(!isOpen)}>
      <button>{data.question}</button>
      <p className={isOpen ? "open" : ""}>{data.answer}</p>
    </div>
  );
}
 
export default AccordeonItem;