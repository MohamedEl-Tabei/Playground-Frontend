import { useState } from "react";

function Question({ question }) {
  const [yourAnswer, setYourAnswer] = useState("option");
  const onSelectAnswer = (option) => {
    if (yourAnswer === question.answer) return;
    setYourAnswer(option);
  };
  return (
    <div className="me-20">
      <h3>{question.head}</h3>
      <div className="d-flex jcb aic">
        <ol type="a">
          {question.options?.map((option, i) => (
            <li
              className={
                yourAnswer === option && yourAnswer === question.answer
                  ? "right"
                  : yourAnswer === option && yourAnswer !== question.answer
                  ? "wrong"
                  : "option"
              }
              key={i}
              onClick={() => onSelectAnswer(option)}
            >
              {option}
            </li>
          ))}
        </ol>
        <img src={question.img} alt={question.answer} />
      </div>
      <hr></hr>
    </div>
  );
}
export default Question;
