const express = require("express");
const app = express();
const port = 3001;

const faq = [
  {
    question: "What does the Plone Foundation do?",
    answer: "The mission of the Plone Foundation is to protect and...",
  },
  {
    question: "Why does Plone need a Foundation?",
    answer: "Plone has reached critical mass, with enterprise...",
  },
];

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(faq);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
