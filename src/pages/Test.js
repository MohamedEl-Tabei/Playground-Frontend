import { Link } from "react-router-dom";
import Components from "../base/components";
const Test = () => {

  return (
    <div className=" h-100 " style={{ overflow: "hidden" }}>
      <Link to={"/"} className="btn-close">
        X
      </Link>
      <Components.TestSetup />
    </div>
  );
};
export default Test;
