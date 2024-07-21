import { useEffect, useState } from "react";
import Components from "../base/components";
import REQUEST from "../api";
import cookieJS from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Page({ name }) {
  let [questions, setQuestions] = useState([]);
  let [topics, setTopics] = useState([]);
  let [topic, setTopic] = useState("");
  let [score, setScore] = useState(30);
  let [loading, setLoading] = useState(true);
  let [mounted, setMounted] = useState(false);
  let [showSideBarForMobile, setShowSideBarForMobile] = useState(false);
  const pages = ["Home", "English", "Web", "Logical Reasoning", "Exams"];

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (mounted) {
      (async () => {
        let response = await REQUEST.get(`topic/readalltopics/${name}`);
        setTopics(await response.data.sort((a,b)=>a.name.localeCompare(b.name)));
      })();
    }
  }, [name, mounted]);
  useEffect(() => {
    let cookie = cookieJS.get("topic");
    let lastTopic = topics.find((x) => x.name === cookie);
    setTopic(lastTopic ? lastTopic : topics[0]);
  }, [topics]);
  useEffect(() => {
    if (mounted && topic?.name?.length) {
      (async () => {
        setLoading(true);
        let respond = await REQUEST.post("/mcq/getmcqsbytopicnumber", {
          topicNumber: topic?.number,
        });
        setQuestions(
          await respond.data.sort((a, b) => {
            const num = Math.floor(10 * Math.random());
            if (num <= 3)
              return a.options[num].localeCompare(b.options[num - 1]);
            if (num % 2 === 0) return a.options[0].localeCompare(b.answer);
            else return a.head.localeCompare(b.options[0]);
          })
        );
        setScore((await respond.data.length) * 3);
        await setLoading(false);
      })();
    }
  }, [topic, mounted]);

  return loading ? (
    <Components.Loading permission={"user"} />
  ) : (
    <div className="h-100">
      <Components.NavBar page={name} />
      <div className="d-flex w-100 h-100 ">
        <Components.SideBar
          setShowSideBarForMobile={setShowSideBarForMobile}
          showSideBarForMobile={showSideBarForMobile}
          topic={topic}
          topics={topics}
          setTopic={setTopic}
        />
        <div style={{ marginTop: 90 }} className="scroll-y w-75 mobile-w-100">
          <div
            className="score w-75 d-flex aic jcc mobile-w-100"
            style={{ color: "#445469", fontSize: 15, height: 27.2 }}
          >
            <FontAwesomeIcon
              onClick={() => setShowSideBarForMobile(true)}
              className="d-none mobile-d-block"
              style={{ color: "#445469" }}
              icon={faEllipsisVertical}
            />
            <div className="d-none w-50 mobile-nav mobile-d-flex">
              {
                pages.map((p, i) => {
                  return (
                    <Link
                      title={p !== "Home" ? "MCQs" : ""}
                      key={i}
                      style={{ textDecoration: "none" }}
                      to={`/${p === "Home" ? "" : p.replace(" ", "")}`}
                    >
                      <h5
                        key={i}
                        onClick={() => {}}
                        className={`mobile-w-mc text-dark ${ name === p ? "open" : ""}`}
                        style={{ transform: "scale(.8)",margin:p==="Home"?0:"" }}
                      >
                        {p}
                      </h5>
                    </Link>
                  );
                })
              }
            </div>
            <small>
              Score: <span style={{ marginLeft: 7 }}>{score}</span>/
              {questions.length * 3}
            </small>
          </div>
          <ol className="m-0 mobile-f-s">
            {questions?.map((q, i) => (
              <li key={i}>
                <Components.Question
                  isLast={i === questions.length - 1}
                  question={q}
                  score={score}
                  setScore={setScore}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Page;
