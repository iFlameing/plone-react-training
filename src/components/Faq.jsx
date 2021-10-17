import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addFaqItem, getFaqItems } from "../actions";
import FaqItem from "./FaqItem";

function Faq() {
  const faqList = useSelector((state) => state.faq);
  const dispatch = useDispatch();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const onChangeAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const onChangeQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setQuestion("");
    dispatch(addFaqItem(question, answer));
    setAnswer("");
  };

  useEffect(() => {
    dispatch(getFaqItems());
  });

  return (
    <div>
      <ul>
        {faqList.map((item, index) => (
          <FaqItem
            question={item.question}
            answer={item.answer}
            index={index}
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
