import { Link } from "react-router-dom";
import Questions from "../base/staticData";
import Components from "../base/components";
import { useEffect, useState } from "react";
function Home() {
  let [loading, setLoading] = useState(true);
  let [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (mounted) setTimeout(() => setLoading(false), 2000);
  }, [mounted]);
  return loading ? (
    <Components.Loading />
  ) : (
    <div className="h-100 ">
      <div className="d-flex w-100 h-100 ">
        <aside>
          <div className="m-0">
            <h1
              className="w-100"
              style={{ height: 60, borderBottom: "solid 1px white" }}
            >
              Playground
            </h1>

            {["Home", "Web", "English", "Logical Reasoning"].map((p, i) => (
              <Link
                title={p !== "Home" ? "MCQs" : ""}
                key={i}
                style={{ textDecoration: "none", color: "white" }}
                to={`/${p === "Home" ? "" : p.replace(" ", "")}`}
              >
                <h4 key={i} className={`${p === "Home" ? "bg-main" : ""}`}>
                  {p}
                </h4>
              </Link>
            ))}
          </div>
        </aside>

        <div className="w-75 h-100" style={{ overflow: "hidden" }}>
          <nav
            className="d-flex jcc w-75"
            style={{ textAlign: "center", color: "white" }}
          >
            <small>Welcome to my playground which contains some information I learned
            and applied.</small>
          </nav>
          <div className="scroll-y" style={{ marginTop: 60, height: "92%" }}>
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
