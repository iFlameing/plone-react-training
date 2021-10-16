import faq from "./faq";

describe("faq", () => {
  it("is able to handle the add faq item action", () => {
    expect(
      faq([], {
        type: "ADD_FAQ_ITEM",
        question: "What is the answer to life the universe and everything?",
        answer: 42,
      })
    ).toEqual([
      {
        question: "What is the answer to life the universe and everything?",
        answer: 42,
      },
    ]);
  });
  it("is able to handle the edit faq item action", () => {
    expect(
      faq(
        [
          {
            question: "What is the answer to life the universe and everything?",
            answer: 42,
          },
        ],
        {
          type: "EDIT_FAQ_ITEM",
          index: 0,
          question: "What is the answer to life the universe and everything?",
          answer: 43,
        }
      )
    ).toEqual([
      {
        question: "What is the answer to life the universe and everything?",
        answer: 43,
      },
    ]);
  });

  it("is able to handle the delete faq item action", () => {
    expect(
      faq(
        [
          {
            question: "What is the answer to life the universe and everything?",
            answer: 42,
          },
        ],
        {
          type: "DELETE_FAQ_ITEM",
          index: 0,
        }
      )
    ).toEqual([]);
  });
});
