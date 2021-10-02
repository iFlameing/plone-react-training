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

  return (
    <ul>
      {faqList.map((item) => (
        <FaqItem question={item.question} answer={item.answer} />
      ))}
    </ul>
  );
}

export default App;
