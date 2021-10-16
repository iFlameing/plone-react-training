import { useState } from "react";
import "./FaqItem.css";
import PropTypes from "prop-types";

const FaqItem = (props) => {
  const [isAnswer, setAnswer] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const toggle = () => {
    setAnswer(!isAnswer);
  };
  const ondelete = () => {
    props.onDelete(props.index);
  };

  const onEdit = () => {
    setIsEditMode(true);
  };

  const onSave = (e) => {
    e.preventDefault();
    setIsEditMode(false);
  };

  return (
    <>
      {isEditMode ? (
        <li className="faq-item">
          <form onSubmit={onSave}>
            <label>
              Question:
              <input name="question" />
            </label>
            <label>
              Answer:
              <textarea name="answer" />
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
        </li>
      )}
    </>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default FaqItem;
