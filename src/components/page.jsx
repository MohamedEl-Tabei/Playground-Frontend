import { useEffect, useState } from "react";
import Components from "../base/components";
import REQUEST from "../api";
import cookieJS from "js-cookie";

function Page({ name }) {
  let [questions, setQuestions] = useState([]);
  let [topics, setTopics] = useState([]);
  let [topic, setTopic] = useState("");
  let [score, setScore] = useState(30);
  let [loading, setLoading] = useState(true);
  let [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (mounted) {
      (async () => {
        let response = await REQUEST.get(`topic/readalltopics/${name}`);
        setTopics(await response.data);
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
        <Components.SideBar topic={topic} topics={topics} setTopic={setTopic} />
        <div style={{ marginTop: 90 }} className="scroll-y w-75">
          <div className="score">
            Score: <span style={{ marginLeft: 7 }}>{score}</span>/
            {questions.length * 3}
          </div>
          <ol className="m-0">
            {questions?.map((q, i) => (
              <li key={i} >
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
