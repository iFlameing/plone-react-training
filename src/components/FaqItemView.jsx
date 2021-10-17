import { useEffect } from "react";
import { getFaqItems } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

const FaqItemView = () => {
  const { index } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const faqItem = useSelector((state) =>
    state.faq.length ? state.faq[index] : {}
  );

  const onBack = () => {
    history.push("/");
  };

  useEffect(() => {
    dispatch(getFaqItems());
  }, [dispatch]);

  return (
    <div>
      <h2 className="question">{faqItem.question}</h2>
      <p>{faqItem.answer}</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default FaqItemView;
