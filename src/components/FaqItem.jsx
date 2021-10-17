import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { editFaqItem, deleteFaqItem } from "../actions";
import "./FaqItem.css";

const FaqItem = (props) => {
  const [isAnswer, setAnswer] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setQuestionAnswer] = useState("");
  const dispatch = useDispatch();

  const toggle = () => {
    setAnswer(!isAnswer);
  };
  const ondelete = () => {
    dispatch(deleteFaqItem(props.index));
  };

  const onEdit = () => {
    setIsEditMode(true);
    setQuestionAnswer(props.answer);
    setQuestion(props.question);
  };

  const onChangeAnswer = (e) => {
    setQuestionAnswer(e.target.value);
  };
  const onChangeQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const onSave = (e) => {
    e.preventDefault();
    setIsEditMode(false);
    dispatch(editFaqItem(props.index, question, answer));
  };

  return (
    <>
      {isEditMode ? (
        <li className="faq-item">
          <form onSubmit={onSave}>
            <label>
              Question:
              <input
                name="question"
                value={question}
                onChange={onChangeQuestion}
              />
            </label>
            <label>
              Answer:
              <textarea
                name="answer"
                value={answer}
                onChange={onChangeAnswer}
              />
            </label>
            <input type="submit" value="Save" />
          </form>
        </li>
      ) : (
        <li className="faq-item">
          <h2 className="question" onClick={toggle}>
            {props.question}
          </h2>
          {isAnswer && <p>{props.answer}</p>}
          <button onClick={ondelete}>Delete</button>
          <button onClick={onEdit}>Edit</button>
          <Link to={`/faq/${props.index}`}>View</Link>
        </li>
      )}
    </>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default FaqItem;
