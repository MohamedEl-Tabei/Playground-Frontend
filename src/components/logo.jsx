import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h1>
      <Link style={{ textDecoration: "none" }} className="color-main" to={`/`}>
        <div className="d-flex aic jcb" style={{ border: "1px #f68840  solid", borderLeft:"none",borderBottom:"none",borderRadius:"0px 20px 0px 0px",}}>
          <img
            src="./icon/spiral_13162114.png"
            style={{borderRadius:"0px 0px 0px 20px", width: 45, backgroundColor:"#24b9cc", border:"" ,borderLeft:"none",borderTop:"none",filter: "hue-rotate(202deg)"}}
            alt=""
          />
          <div style={{ margin: "0px 17px 0px 15px" , color:"white",fontWeight:"lighter"}}>Playground</div>
        </div>
      </Link>
    </h1>
  );
};
export default Logo;
