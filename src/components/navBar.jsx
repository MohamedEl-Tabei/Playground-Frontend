import { Link } from "react-router-dom";
function NavBar({ page }) {
  const pages = ["English", "Web", "Logical Reasoning"];
  return (
    <nav>
      <h1>
        <Link style={{ textDecoration: "none" }} className="color-main" to={`/`}>
          <div>Playground</div>
        </Link>
      </h1>
      {pages.map((p, i) => {
        return (
          <Link key={i} style={{ textDecoration: "none" }} to={`/${p==="English"?"":p.replace(" ","")}`}>
            <h5 key={i} onClick={() => {}} className={page === p ? "open" : ""}>
              {p}
            </h5>
          </Link>
        );
      })}
    </nav>
  );
}
export default NavBar;
