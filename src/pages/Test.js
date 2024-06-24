import { Link } from "react-router-dom";
import Components from "../base/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome}from "@fortawesome/free-solid-svg-icons"
const Test = () => {

  return (
    <div className=" h-100 " style={{ overflow: "hidden" }}>
      <Link to={"/"} title="Home" className="btn-close ">
        <FontAwesomeIcon icon={faHome}/>
      </Link>
      <Components.TestSetup />
    </div>
  );
};
export default Test;
