import { useEffect } from "react";
import AccordeonItem from "./AccordeonItem";

export interface accordeonItem {
  question: string;
  answer: string;
}

const InformationBlock = () => {
  const accordeonData: accordeonItem[] = [
    {
      question: "Как проходит оплата?",
      answer: "Для оплаты вам нужно перейти в нашего Telegram-бота и следовать указаниям.",
    },
    {
      question: "С каких стран доступна оплата?",
      answer: "Оплата доступна для таких стран как Украина, Россия и Казахстан.",
    },
    {
      question: "Что делать если я забыл пароль от аккаунта?",
      answer:
        "При входе в аккаунт вы сможете без проблем восстановить пароль по указанной вами почте.",
    },
    {
      question: "Можно ли перенести курс на другой аккаунт?",
      answer:
        "Прямой возможности нет, но вы всегда можете написать нам для решения вашей проблемы.",
    },
  ];

  useEffect(() => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("animation");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
  
      const items = document.querySelectorAll(".accordeon");
  
      items.forEach((item) => {
        observer.observe(item);
      });
  
      return () => {
        observer.disconnect();
      };
    }, []);

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
