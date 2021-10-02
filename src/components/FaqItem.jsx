import "./FaqItem.css";

const FaqItem = (props) => {
  return (
    <li className="faq-item">
      <h2 className="question">{props.question}</h2>
      <p>{props.answer}</p>
    </li>
  );
};

export default FaqItem;
