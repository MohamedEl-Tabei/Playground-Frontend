import { useEffect, useRef, useState } from "react";
import Components from "../base/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
const MCQsTest = ({ testQuestions, time }) => {
  let [flags, setFlags] = useState([]);
  let [renderMe, setRenderMe] = useState(false);
  let [finishTest, setFinishTest] = useState(false);
  let [score, setScore] = useState(testQuestions.length);
  let [restTime, setRestTime] = useState(time*60);
  let [sec,setSec]=useState("")
  let [min,setMin]=useState("")
  let [hr,setHr]=useState("")
  let timeRef = useRef(null);
  let flagRef = useRef(null);
  useEffect(()=>{
    let h=Math.floor(restTime/3600)
    let m=Math.floor((restTime%3600)/60)
    let s=restTime%60
    setHr(h>9?h:`0${h}`)
    setMin(m>9?m:`0${m}`)
    setSec(s>9?s:`0${s}`)

  },[restTime])
  useEffect(() => {
    if (restTime >0&&!finishTest) {
      timeRef.current = setTimeout(() => {
        setRestTime(restTime - 1);
      }, 1000);
    }
    if (restTime === 0) {
      setRestTime(restTime - 1);
      let _score = score;
      testQuestions.forEach((mcq) => {
        _score = mcq.answer !== mcq.userAnswer ? _score - 1 : _score;
      });
      setScore(_score);
      setFinishTest(true);
      clearTimeout(timeRef.current);
    }
  }, [restTime, score, testQuestions,finishTest,time]);
  const onFlag = (event) => {
    flagRef.current = document.getElementById(
      `question${event.currentTarget.value}`
    );
    flagRef.current.scrollIntoView();
  };
  const onSelectAnswer = (mcq, option) => {
    if (!finishTest) {
      mcq.userAnswer = mcq.options.indexOf(option);
      setRenderMe(!renderMe);
    }
  };
  const onsubmitTest = () => {
    let _score = score;
    testQuestions.forEach((mcq) => {
      _score = mcq.answer !== mcq.userAnswer ? _score - 1 : _score;
    });
    setScore(_score);
    setFinishTest(true);
    clearTimeout(timeRef.current);
  };
  return (
    <div
      className="absolute"
      style={{
        margin: 10,
        top: 0,
        left: 0,
        height: "98vh",
        width: "99vw",
        backgroundColor: "white",
      }}
    >
      <div className="px-20 d-flex aic">
        <div>{hr}:{min}:{sec} </div>
        <button
          onClick={() => window.location.reload()}
          style={{ fontSize: "small", padding: "10px 15px" }}
        >
          Setup new test
        </button>
      </div>
      <div className="h-80vh scroll-y border-top border-bottom d-flex flex-column  aic mt-15 mb-15 ">
        {testQuestions.map((mcq, i) => {
          return (
            <div
              className={
                !finishTest
                  ? "mcqContainer"
                  : mcq.userAnswer !== mcq.answer
                  ? "mcqContainerWrong"
                  : "mcqContainerRight"
              }
              key={i}
              id={`question${i}`}
            >
              <small
                className="mcqInfo"
                style={{ color: flags.includes(i) ? "#f68840" : "" }}
                onClick={() => {
                  let arr = [];
                  if (!flags.includes(i)) {
                    arr = [...flags];
                    arr.push(i);
                  } else {
                    while (flags.length) {
                      let element = flags.pop();
                      if (i !== element) arr.push(element);
                    }
                  }
                  setFlags(arr.sort((a, b) => a - b));
                }}
              >
                <div>
                  {i + 1} of {testQuestions.length}
                </div>
                <FontAwesomeIcon icon={faFlag} />
              </small>
              <div
                style={{
                  cursor: "default",
                  width: "fit-content",
                  padding: "0px",
                  margin: "30px 0px 50px 0px ",
                }}
              >
                {mcq.head.includes("D[") ? (
                  <div className="d-flex aic">
                    <span style={{ marginRight: 10 }}>
                      {mcq.head.slice(0, mcq.head.indexOf("D"))}
                    </span>

                    <Components.Fraction
                      option={mcq.head.slice(
                        mcq.head.indexOf("D"),
                        mcq.head.indexOf("]") + 1
                      )}
                    />
                    <span style={{ marginLeft: 10 }}>
                      {mcq.head.slice(mcq.head.indexOf("]") + 1)}
                    </span>
                  </div>
                ) : (
                  mcq.head
                )}
              </div>
              <div
                className={"d-flex  jcb aic"}
                style={{ flexWrap: "wrap", marginTop: 10 }}
              >
                {mcq.options.map((option, j) => {
                  return (
                    <div
                      className={
                        finishTest && mcq.answer === j
                          ? "rightSelctedTest"
                          : finishTest && mcq.userAnswer === j
                          ? "wrongSelctedTest"
                          : mcq.userAnswer === j
                          ? "selctedTest"
                          : "mcqTestOption"
                      }
                      key={j}
                      onClick={() => onSelectAnswer(mcq, option)}
                    >
                      {option?.includes("D[") ? (
                        <Components.Fraction option={option} />
                      ) : (
                        option
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-20 d-flex jcb aic ">
        <div className="w-75  d-flex" style={{ overflowX: "scroll" }}>
          <button className="btn-close p-0 mx-10 hidden">x</button>
          {flags.map((flag, i) => {
            return (
              <button
                className="btn-close p-0 mx-10"
                value={flag}
                key={i}
                onClick={(e) => onFlag(e)}
              >
                {flag + 1}
              </button>
            );
          })}
          <button className="btn-close p-0 mx-10 hidden">x</button>
        </div>
        {finishTest ? (
          <div>
            Your score is {score}/{testQuestions.length}
          </div>
        ) : (
          <button
            className="btn-submit"
            onClick={() => onsubmitTest()}
            style={{ fontSize: "small", padding: "10px 15px", marginLeft: 0 }}
          >
            Submit test
          </button>
        )}
      </div>
    </div>
  );
};
export default MCQsTest;
