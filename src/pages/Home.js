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
      <Components.NavBar page={"Home"} />
      <div className="d-flex w-100 h-100 ">
        <aside>
          <div  style={{marginTop:60,textAlign:"center"}}>
            {["Home", "Web", "English", "Logical Reasoning"].map((p, i) => (
              <Link
                title={p !== "Home" ? "MCQs" : ""}
                key={i}
                style={{ textDecoration: "none", color: "white" }}
                to={`/${p === "Home" ? "" : p.replace(" ", "")}`}
              >
                <h4 key={i} style={{backgroundColor:`${p === "Home" ? "#445469" : ""}`}}>
                  <div style={{ transform: "scale(.8)" }}>{p}</div>
                </h4>
              </Link>
            ))}
          </div>
        </aside>

        <div className="w-75 h-100" style={{ overflow: "hidden" }}>
          <div className="scroll-y" style={{ marginTop: 90, height: "87%" }}>
            <div className="score color-main">
              <small>Entertainment</small>
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
