import { Link } from "react-router-dom";
import Questions from "../base/staticData";
import Components from "../base/components";
import { useEffect, useState } from "react";
function Home() {
  let [loading, setLoading] = useState(true);
  let [mounted, setMounted] = useState(false);
  const pages = ["Home", "English", "Web", "Logical Reasoning", "Database"];

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (mounted) setTimeout(() => setLoading(false), 2000);
  }, [mounted]);
  return loading ? (
    <Components.Loading />
  ) : (
    <div className="h-100  ">
      <Components.NavBar page={"Home"} />
      <div className="d-flex w-100 h-100 mobile-fs-11 ">
        <aside className={"mobile-d-none"}>
          <div style={{ marginTop: 60, textAlign: "center" }}>
            {["Home", "Web", "English", "Logical Reasoning", "Database"].map(
              (p, i) => (
                <Link
                  title={p !== "Home" ? "MCQs" : ""}
                  key={i}
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/${p === "Home" ? "" : p.replace(" ", "")}`}
                >
                  <h4
                    key={i}
                    style={{
                      backgroundColor: `${p === "Home" ? "#445469" : ""}`,
                    }}
                  >
                    <div style={{ transform: "scale(.8)" }}>{p}</div>
                  </h4>
                </Link>
              )
            )}
          </div>
        </aside>

        <div
          className="w-75 mobile-w-100  h-100"
          style={{ overflow: "hidden" }}
        >
          <div className="scroll-y" style={{ marginTop: 90, height: "87%" }}>
            <div
              className="score  w-75 mobile-w-100 d-flex aic jcc"
              style={{ color: "#445469", fontSize: 15, height: 27.2 }}
            >
              <div className="d-none  mobile-nav mobile-d-flex">
                {pages.map((p, i) => {
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
                        className={`mobile-w-mc text-dark ${
                          p === "Home" ? "open" : ""
                        }`}
                        style={{
                          transform: "scale(.8)",
                          margin: p === "Home" ? 0 : "",
                        }}
                      >
                        {p}
                      </h5>
                    </Link>
                  );
                })}
              </div>
              <small className="mobile-d-none">
                Programming gives you the power to create a virtual world
                centered around your ideas and imagination.
              </small>
              <Link
                style={{ marginLeft: 4 }}
                className="btn-test hidden mobile-d-none"
              >
                Test
              </Link>
            </div>
            <ol>
              {Questions.map((q, i) => (
                <li key={i}>
                  <h3>{q.head}</h3>
                  <div className="p-20">
                    <q.component />
                  </div>
                  <hr />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
