import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHireAHelper } from "@fortawesome/free-brands-svg-icons";
import Components from "../base/components";
function Question({ question, score, setScore, isLast }) {
  const [yourAnswer, setYourAnswer] = useState("option");
  const [useAssistance, setUseAssistance] = useState(false);
  const [delete2Options, setDelete2Options] = useState([]);
  const onSelectAnswer = (option) => {
    if (yourAnswer !== "option") return;
    setYourAnswer(option.trim());
    setScore(option.trim() !== question.answer.trim() ? score - 2 : score);
    setUseAssistance(true);
  };
  useEffect(() => {
    setYourAnswer("option");
    setUseAssistance(false); /////////////////////////////////Edit it
  }, [question]);
  return (
    <div className="me-20">
      <h3>
        <span>{question.head}</span>{" "}
        {question.help ? (
          <FontAwesomeIcon
            title="-1"
            onClick={() => {
              setUseAssistance(true);
              setScore(score - 1);
            }}
            className={useAssistance ? "d-none" : "image"}
            icon={faHireAHelper}
          />
        ) : (
          <FontAwesomeIcon
            title="Delete two options -1"
            onClick={() => {
              setUseAssistance(true);
              setScore(score - 1);
              let random = Math.floor(Math.random() * 10);
              let indexOfAnswer = question.options.indexOf(question.answer);
              if (random % 2 === 0) {
                setDelete2Options(
                  indexOfAnswer === 0
                    ? [2, 3]
                    : indexOfAnswer === 2
                    ? [0, 3]
                    : [0, 2]
                );
              } else {
                setDelete2Options(
                  indexOfAnswer === 1
                    ? [2, 3]
                    : indexOfAnswer === 3
                    ? [0, 1]
                    : [1, 3]
                );
              }
            }}
            className={useAssistance ? "d-none" : "image"}
            icon={faHireAHelper}
          />
        )}
      </h3>
      <div className="d-flex jcb ">
        <ol type="a">
          {question.options?.map((option, i) => (
            <li
              className={`
                ${delete2Options.includes(i) ? "hidden" : ""}

              ${
                (yourAnswer === option?.trim() &&
                  yourAnswer === question.answer.trim()) ||
                (question.options.includes(yourAnswer) &&
                  option?.trim() === question.answer.trim())
                  ? "right"
                  : yourAnswer === option?.trim() &&
                    yourAnswer !== question.answer.trim()
                  ? "wrong"
                  : "option"
              }
                  `}
              key={i}
              onClick={() => onSelectAnswer(option)}
            >
              {option?.includes("D[")?<Components.Fraction option={option}/>:option}
            </li>
          ))}
        </ol>

        <div
          className={useAssistance && question.help ? "visible text-main bg-dark d-flex jcc aic px-20 rounded-25" : "hidden"}
        >
          {question.help}
        </div>
      </div>
      <hr className={isLast ? "hidden" : ""} />
    </div>
  );
}
export default Question;
