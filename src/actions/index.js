export const addFaqItem = (question, answer) => ({
  type: "ADD_FAQ_ITEM",
  question,
  answer,
});

export const editFaqItem = (index, question, answer) => ({
  type: "EDIT_FAQ_ITEM",
  index,
  question,
  answer,
});

export const deleteFaqItem = (index) => ({
  type: "DELETE_FAQ_ITEM",
  index,
});
