import { useState } from "react";
import "./FaqItem.css";
import PropTypes from "prop-types";

const FaqItem = (props) => {
  const [isAnswer, setAnswer] = useState(false);
  return (
    <li className="faq-item">
      <h2 className="question">{props.question}</h2>
      {isAnswer && <p>{props.answer}</p>}
    </li>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FaqItem;
