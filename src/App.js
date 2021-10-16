import { useState } from "react";
import "./App.css";
import FaqItem from "./components/FaqItem";

function App() {
  const [faqList, setFaqList] = useState([
    {
      question: "What does the Plone Foundation do?",
      answer: "The mission of the Plone Foundation is to protect and...",
    },
    {
      question: "Why does Plone need a Foundation?",
      answer: "Plone has reached critical mass, with enterprise...",
    },
  ]);

  const onDelete = (index) => {
    let faq = [...faqList];
    faq.splice(index, 1);
    setFaqList(faq);
  };

  return (
    <ul>
      {faqList.map((item, index) => (
        <FaqItem
          question={item.question}
          answer={item.answer}
          index={index}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default App;
