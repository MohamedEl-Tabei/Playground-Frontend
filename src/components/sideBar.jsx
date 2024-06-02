import cookieJS from "js-cookie"
function SideBar({ topics, setTopic, topic }) {
  return (
    <aside>
      <div>
        {topics?.map((t, i) => (
          <h4 key={i} className={`${t.name===topic?.name?"bg-main":""}`} onClick={()=>{
            cookieJS.set("topic",t.name)
            setTopic(t)
          }}>{`${t.name[0].toUpperCase()}${t.name.slice(1)}`}</h4>
        ))}
      </div>
    </aside>
  );
}
export default SideBar;
