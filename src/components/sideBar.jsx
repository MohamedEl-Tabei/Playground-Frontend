import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cookieJS from "js-cookie"
function SideBar({ topics, setTopic, topic,showSideBarForMobile,setShowSideBarForMobile }) {
  return (
    <aside className={showSideBarForMobile?"mobile-d-block":"mobile-d-none"}>
      <div className="btn-close d-none mobile-d-flex" onClick={()=>setShowSideBarForMobile(false)}><FontAwesomeIcon icon={faX}/></div>
      <div style={{marginTop:60,textAlign:"center"}}>
        {topics?.map((t, i) => (
          <h4 key={i} style={{backgroundColor:`${t.name===topic?.name?"#445469":""}`}} onClick={()=>{
            cookieJS.set("topic",t.name)
            setTopic(t)
          }}>
            <div style={{transform:"scale(.8)"}}>
            {`${t.name[0].toUpperCase()}${t.name.slice(1)}`}
            </div>
          </h4>
        ))}
      </div>
    </aside>
  );
}
export default SideBar;
