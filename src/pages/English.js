import { useEffect, useState } from "react";
import Components from "../base/components";

function English() {
  let [questions, setQuestions] = useState([]);
  let [topics, setTopics] = useState([]);
  let [topic, setTopic] = useState("");
  useEffect(() => {
    let respond = ["Vocab 1", "Vocab 2"];
    setTopics(respond);
    setTopic(respond[0]);
  }, []);
  useEffect(() => {
    let respond = [
      {
        img: "https://img.freepik.com/free-photo/new-life-sprouts-from-green-seedling-nature-generative-ai_188544-12889.jpg?t=st=1716230130~exp=1716233730~hmac=5f818e01eab9e7c216c49eae25b99317387d7a304197d0625ef87e314ea77070&w=1060",
        head: "Synonyms: thrive",
        answer: "burgeon",
        options: ["force", "toil", "wither", "burgeon"],
      },
    ];
    setQuestions(respond);
  }, [topic]);
  return (
    <div className="h-100">
      <Components.NavBar page={"English"} />
      <div class="d-flex w-100 h-100 ">
        <Components.SideBar topic={topic} topics={topics} setTopic={setTopic} />
        <div class="pt-70 w-75">
          <ol>
            {questions?.map((q, i) => (
              <li>
                <Components.Question question={q} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default English;
