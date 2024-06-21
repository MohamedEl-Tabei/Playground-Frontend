import { useEffect, useState } from "react";
import REQUEST from "../api";
import Components from "../base/components";
const TestSetup = () => {
  const mainTopics = ["English", "Web", "Logical Reasoning", "Database"];
  let [testTopics, setTestTopics] = useState([]);
  let [allTopics, setAllTopics] = useState([]);
  let [mounted, setMounted] = useState(false);
  let [max, setMax] = useState(0);
  let [time, setTime] = useState(1);
  let [numQ, setNumQ] = useState(max);
  let [loading, setLoading] = useState(true);
  const onChecked = async (topicId) => {
    let arr = [];
    setLoading(true)
    if (testTopics?.includes(topicId)) {
      while (testTopics.length) {
        let id = testTopics.pop();
        if (id !== topicId) arr.push(id);
      }
      setTestTopics(arr);
    } else {
      arr = [...testTopics];
      arr.push(topicId);
      setTestTopics(arr);
    }
    let response=(await REQUEST.post("topic/maxMcqs", { testTopics: arr }))
    setNumQ(response.data<numQ?response.data:numQ)
    setMax(response.data);
    setLoading(false)
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (mounted)
      REQUEST.get(`topic/readalltopics/All`).then((v) => {setAllTopics(v.data);setLoading(false)});
  }, [mounted]);
  if (!allTopics.length) return <Components.Loading permission="admin" />;
  return (
    <form
      action=""
      style={{ width: "100%", height: "90%", backgroundColor: "white" }}
    >
      <h1
        style={{
          width: "max-content",
          height: "max-content",
          fontWeight: "lighter",
        }}
      >
        Set up your test
      </h1>
      <div className="w-75  mt-25 border-bottom">
        {mainTopics.map((m, i) => {
          return (
            <dl
              className={`mt-15 ${
                !allTopics.find((x) => x.category === i + 1) ? "d-none" : ""
              }`}
              key={i}
            >
              <dt>{m}</dt>
              <dd className="d-flex jcb flex-wrap fs-smaller{">
                {allTopics.map((t, j) => {
                  if (i + 1 === t.category)
                    return (
                      <div key={j} className="d-flex" style={{ width: "30%" }}>
                        <input
                          style={{ marginRight: 5 }}
                          className="m-0 bg-main"
                          type="checkbox"
                          id={t.name}
                          onChange={() => onChecked(t.number)}
                        />
                        <label htmlFor={t.name}>{t.name}</label>
                      </div>
                    );
                  return "";
                })}
              </dd>
            </dl>
          );
        })}
      </div>
      {["Questions", "Time"].map((l, i) => {
        return (
          <div className="d-flex w-75 jcc mt-25">
            <label className="d-flex aic" htmlFor={l}>
              {l}{" "}
              <small style={{ marginLeft: 10 }}>
                {i === 0 ? `max (${max})` : `(${time}min)`}
              </small>
            </label>
            <input
              style={{
                width: i === 0 ? 50 : "25%",
                padding: i === 0 ? "5px 10px" : "0px",
                borderRadius: 8,
              }}
              min={i === 0 ? 0 : 10}
              max={i === 0 ? max : 180}
              type={i === 0 ? "number" : "range"}
              id={l}
              value={i === 0 ? numQ : time}
              onChange={(e) =>
                i === 0
                  ? setNumQ(e.currentTarget.value)
                  : setTime(e.currentTarget.value)
              }
            />
          </div>
        );
      })}

      <div className="w-75 mt-25">
        <button
          style={{
            width: "150px",
            padding: "10px 35px",
            marginTop: 25,
            borderRadius: 8,
            border: "2px solid var(--main)",
          }}
          disabled={loading}
        >
          <span
            className={`${loading ? "shapes" : ""}`}
            style={{ animationDuration: "500ms" }}
          >
            {loading ? "0" : "Start test"}
          </span>
        </button>
      </div>
    </form>
  );
};
export default TestSetup;
