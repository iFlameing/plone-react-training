const faq = (state = [], action) => {
  let faq;
  switch (action.type) {
    case "ADD_FAQ_ITEM":
      return [
        ...state,
        {
          question: action.question,
          answer: action.answer,
        },
      ];
    case "EDIT_FAQ_ITEM":
      faq = [...state];
      faq[action.index] = {
        question: action.question,
        answer: action.answer,
      };
      return faq;
    case "DELETE_FAQ_ITEM":
      faq = [...state];
      faq.splice(action.index, 1);
      return faq;
    case "GET_FAQ_ITEMS_SUCCESS":
      return action.data;
    default:
      return state;
  }
};

export default faq;
