import cookieJS from "js-cookie"
function SideBar({ topics, setTopic, topic }) {
  return (
    <aside className="mobile-d-none">
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
