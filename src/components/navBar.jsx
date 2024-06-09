import { Link } from "react-router-dom";
import Components from "../base/components";
function NavBar({ page }) {
  const pages = ["Home", "English", "Web", "Logical Reasoning"];
  return (
    <nav>
      <Components.Logo />
      {page === "Home" ? (
        <small className="w-75" style={{color:"white" , textAlign:"center"}}>
          Welcome to my playground which contains some information I learned and
          applied.
        </small>
      ) : (
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
                className={page === p ? "open" : ""}
                style={{transform:"scale(.8)"}}
              >
                {p}
              </h5>
            </Link>
          );
        })
      )}
    </nav>
  );
}
export default NavBar;
