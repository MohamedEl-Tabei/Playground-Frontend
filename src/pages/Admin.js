import { useEffect, useState } from "react";
import Components from "../base/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import REQUEST from "../api";
const Admin = () => {
  let [text, setText] = useState("");
  let [loading, setLoading] = useState(true);
  let [questions, setQuestions] = useState([]);
  let [password, setPassword] = useState("");
  let [topic, setTopic] = useState("");
  let [topics, setTopics] = useState([]);
  let [error, seterror] = useState("");
  let [addNewTopic, setAddNewTopic] = useState(false);
  let [categoryNumber, setCategoryNumber] = useState(1);
  async function onsubmitHandler(event) {
    event.preventDefault();
    try {
      setLoading(true);
      if (addNewTopic) {
        let response = await REQUEST.post("topic/createnewtopic", {
          name: topic,
          password,
          categoryNumber,
        });
        setTopics(await response.data);
        setTopic("");
        setCategoryNumber(1);
        setLoading(false);

      } else {
        await REQUEST.post("mcq/createmcqs", {
          mcqs: questions,
          topic,
          password,
        });
        await setQuestions([]);
        await setTopic("");
        await setLoading(false);
        await setText("");
      }
      seterror("");
    } catch (error) {
      seterror(await error.response.data);
      setLoading(false);
    }
  }
  useEffect(() => {
    (async () => {
      try {
        let response = await REQUEST.get("topic/readalltopics/All");
        setTopics(await response.data);
        seterror("");
       setLoading(false)
      } catch (error) {
        seterror(await error.response.data);
      }
    })();
  }, []);
  useEffect(() => {
    seterror("");
  }, [topic, addNewTopic]);
  function onChangeHandler(event) {
    var arrQ = [];
    const textarea = event.currentTarget.value;
    setText(textarea);
    const arr = textarea.split("\n;\n");
    arr.forEach((element) => {
      const q = element.split("\n*\n");
      const options = q[3]?.split(",");
      if (options?.length) {
        arrQ.push({
          help: q[0]?.trim(),
          head: q[1]?.trim(),
          answer: q[2]?.trim(),
          options: [
            options[0]?.trim(),
            options[1]?.trim(),
            options[2]?.trim(),
            options[3]?.trim(),
          ],
        });
      }
    });
    setQuestions(arrQ);
  }

  return loading?(<Components.Loading permission={"admin"}/>): (
    <div>
      <h1 className={`w-100 wrong p-0 ${error ? "visible" : "hidden"}`}>
        Error: {error}
      </h1>
      <form onSubmit={(e) => onsubmitHandler(e)}>
        <textarea
          value={text}
          disabled={addNewTopic || loading}
          onChange={(e) => onChangeHandler(e)}
        />
        <div className="w-98 d-flex aic mt-25">
          {addNewTopic ? (
            <div className="d-flex">
              <input
                className="m-0"
                placeholder="New Topic"
                onChange={(e) => setTopic(e.currentTarget.value)}
                value={topic}
                disabled={loading}
                style={{ width: 100 }}
              />
              <input
                className="ms-25"
                type="number"
                placeholder="Category"
                style={{ width: 50 }}
                min={1}
                onChange={(e) => setCategoryNumber(e.currentTarget.value)}
                value={categoryNumber}
              />
            </div>
          ) : (
            <select
              value={topic}
              onChange={(e) => setTopic(e.currentTarget.value)}
              disabled={loading}
            >
              <option disabled value={""}>
                Select Topic
              </option>
              {topics.map((t, k) => (
                <option key={k}>{t.name}</option>
              ))}
            </select>
          )}
          <button
            className="bg-main ms-25 p-20 rounded-circle x50"
            onClick={() => {
              setTopic("");
              setAddNewTopic(!addNewTopic);
            }}
            type="button"
          >
            <FontAwesomeIcon icon={!addNewTopic ? faPlus : faMinus} />
          </button>

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            disabled={loading}
            value={password}
          />
          <button className="ms-25" disabled={password===""}>Save</button>
        </div>
      </form>
      <h2 className="topic">{topic}</h2>
      <ol>
        {questions.map((q, i) => (
          <li key={i}>
            <Components.Question question={q} isLast={false} score={1} setScore={(s)=>{}} />
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Admin;
/*
https://img.freepik.com/free-photo/leaf-nature-meet-water-creating-abstract-background-generative-ai_188544-12884.jpg t=st=1716303097~exp=1716306697~hmac=9d7e8ffa83babc2ca2cb1d379d078a3c5921a2aa6f772a5bd55e413709c279ea&w=1060
*
Antonym: burgeon
*
wither
*
thrive, toil, wither, strive
;

*/
