import { useState } from "react";
import FaqItem from "./FaqItem";

function Faq() {
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

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const onDelete = (index) => {
    let faq = [...faqList];
    faq.splice(index, 1);
    setFaqList(faq);
  };

  const onChangeAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const onChangeQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const onEdit = (index, question, answer) => {
    const faq = [...faqList];
    faq[index] = { question, answer };
    setFaqList(faq);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFaqList([...faqList, { question, answer }]);
    setQuestion("");
    setAnswer("");
  };

  return (
    <div>
      <ul>
        {faqList.map((item, index) => (
          <FaqItem
            question={item.question}
            answer={item.answer}
            index={index}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <label>
          Question:{" "}
          <input
            name="question"
            type="text"
            value={question}
            onChange={onChangeQuestion}
          />
        </label>
        <label>
          Answer:{" "}
          <textarea name="answer" value={answer} onChange={onChangeAnswer} />
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default Faq;
