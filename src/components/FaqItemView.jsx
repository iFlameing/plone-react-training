import { useEffect } from "react";
import { getFaqItems } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const FaqItemView = () => {
  const { index } = useParams();
  const dispatch = useDispatch();
  const faqItem = useSelector((state) =>
    state.faq.length ? state.faq[index] : {}
  );

  console.log(useParams);

  useEffect(() => {
    dispatch(getFaqItems());
  }, [dispatch]);

  return (
    <div>
      <h2 className="question">{faqItem.question}</h2>
      <p>{faqItem.answer}</p>
    </div>
  );
};

export default FaqItemView;
